import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { BookingDto, PaymentGatewayDto, Route, Seat, SeatDto, SeatTypeDto } from "_api";
import { ConfirmEventType, ConfirmationService, MessageService } from "primeng/api";
import { Observable } from "rxjs";
import Seatchart, {
  CartChangeEvent,
  Options,
  SeatChangeEvent,
  SeatIndex,
  SeatInfo,
  SeatType,
  SeatTypeDefault,
} from "seatchart";
import { BookingService } from "src/app/core/service/booking/booking.service";
import { BookingState } from "src/app/core/service/booking/booking.state";
import { RouteState } from "src/app/core/service/route/route.state";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-seat-chart",
  templateUrl: "./seat-chart.component.html",
  styleUrls: ["./seat-chart.component.scss"],
})
export class SeatChartComponent implements OnInit {
  @ViewChild("container", { static: true }) public containerRef!: ElementRef<HTMLDivElement>;
  @Select(RouteState.getRouteByIdAndDate) public route$: Observable<Route>;
  @Select(BookingState.getBookingDate) public date$: Observable<string>;
  @Output() checkOutUrl = new EventEmitter<PaymentGatewayDto>();
  public currentRoute: Route;
  public seatchart!: Seatchart;
  public mapSeat: number[][] = [];
  public seatTypes: SeatTypeDto[] = [];
  public reservedSeat: Seat[] = [];
  public chosenSeats: Array<Number> = [];

  constructor(
    private renderer: Renderer2,
    private bookingService: BookingService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route$.subscribe((route: Route) => {
      this.currentRoute = route;
      this.seatTypes = this.currentRoute.transport.seatTypes;
      this.mapSeat = route.transport["mapSeat"][0];
      this.reservedSeat = route.seats;
      this.configSeatChart();

      const checkoutButton = this.containerRef.nativeElement.querySelector(".sc-cart-btn-submit");

      this.renderer.listen(checkoutButton, "click", () => {
        this.submitSeats();
      });

      this.seatchart.addEventListener("cartchange", (event: CartChangeEvent) => {
        const typeOfSeat = event.seat.type;

        if (event.action === "add") {
          if (typeOfSeat === "default") {
            this.chosenSeats.push(this.seatTypes[0].price);
          } else this.chosenSeats.push(this.seatTypes[1].price);
        }

        if (event.action === "remove") {
          if (typeOfSeat === "default") {
            const defaultSeatIndex = this.chosenSeats.indexOf(this.seatTypes[0].price);
            if (defaultSeatIndex !== -1) {
              this.chosenSeats.splice(defaultSeatIndex, 1);
            }
          } else {
            const premiumSeatIndex = this.chosenSeats.indexOf(this.seatTypes[1].price);
            if (premiumSeatIndex !== -1) {
              this.chosenSeats.splice(premiumSeatIndex, 1);
            }
          }
        }

        const cartFooter = document.querySelector(".sc-cart-footer");
        const cartTotal = document.querySelector(".sc-cart-total");

        if (cartTotal) {
          cartFooter.removeChild(cartTotal);
        }

        const node = document.createElement("p");
        node.classList.add("sc-cart-total");

        const totalSeatsPrice = this.chosenSeats.reduce((partialSum: number, a: number) => partialSum + a, 0);

        const textnode = document.createTextNode(
          `Total: ${this.chosenSeats.length} ticket(s) = $${
            Number(this.chosenSeats.length * route.price) + totalSeatsPrice.valueOf()
          } `
        );
        node.appendChild(textnode);

        if (cartFooter.firstChild) {
          cartFooter.insertBefore(node, cartFooter.firstChild);
        } else {
          cartFooter.appendChild(node);
        }
      });
    });
  }

  private submitSeats(): void {
    this.date$.subscribe((date) => {
      if (this.chosenSeats.length === 0) return;

      const seats: SeatDto[] = (this.seatchart as any).store.cart.map((seat) => ({
        col: seat.index["col"],
        row: seat.index["row"],
        floor: 0,
        date,
        route: {
          id: this.currentRoute.id,
        },
      }));
      const bookingDto: BookingDto = { seats };

      this.confirmationService.confirm({
        message: "Please choose a payment method",
        header: "Payment method",
        icon: "pi pi-info-circle",
        accept: () => {
          this.bookingService.createBooking$(bookingDto).subscribe((paymentGatewayDto: PaymentGatewayDto) => {
            this.checkOutUrl.emit(paymentGatewayDto);
          });
        },
        reject: (type: ConfirmEventType) => {
          switch (type) {
            case ConfirmEventType.REJECT:
              this.bookingService.createBookingByCash$(bookingDto).subscribe((_) => {
                this.router.navigate(["/management/booking-management"]);
                this.toastService.showSuccess(
                  "Success",
                  "Booking pending successfully! Please come to the agency to complete the payment."
                );
              });
              break;
            case ConfirmEventType.CANCEL:
              return;
          }
        },
      });
    });
  }

  private configSeatChart(): void {
    const options: Options = {
      map: {
        rows: this.mapSeat.length,
        columns: this.mapSeat[0].length,
        seatTypes: {
          default: {
            label: "Normal seat",
            cssClass: "normal-seat",
            price: this.seatTypes[0].price,
          },
          vipSeat: {
            label: "VIP seat",
            cssClass: "vip-seat",
            price: this.seatTypes[1].price,
          },
        },
        reservedSeats: this.reservedSeat.map((seat) => ({
          col: seat.col,
          row: seat.row,
        })),
      },
      cart: {
        currency: "$",
      },
    };

    this.seatchart = new Seatchart(this.containerRef.nativeElement, options);

    this.mapSeat.forEach((row, rowIndex) => {
      row.forEach((colValue, colIndex) => {
        this.seatchart.setSeat({ row: rowIndex, col: colIndex }, { type: colValue === 0 ? "default" : "vipSeat" });
      });
    });
  }
}
