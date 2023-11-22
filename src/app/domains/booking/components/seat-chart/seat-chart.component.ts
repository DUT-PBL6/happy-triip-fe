import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { Select } from "@ngxs/store";
import { BookingDto, Route, Seat, SeatDto } from "_api";
import { Observable } from "rxjs";
import Seatchart, { Options, SeatIndex, SeatInfo, SeatType, SeatTypeDefault } from "seatchart";
import { BookingService } from "src/app/core/service/booking/booking.service";
import { RouteState } from "src/app/core/service/route/route.state";

@Component({
  selector: "app-seat-chart",
  templateUrl: "./seat-chart.component.html",
  styleUrls: ["./seat-chart.component.scss"],
})
export class SeatChartComponent implements OnInit {
  @ViewChild("container", { static: true }) public containerRef!: ElementRef<HTMLDivElement>;
  @Select(RouteState.getRouteByIdAndDate) public route$: Observable<Route>;
  @Select(RouteState.getBookingDate) public date$: Observable<string>;
  @Output() checkOutUrl = new EventEmitter<{ url: string }>();
  public currentRoute: Route;
  public seatchart!: Seatchart;
  public mapSeat: number[][] = [];
  public reservedSeat: Seat[] = [];

  constructor(
    private renderer: Renderer2,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.route$.subscribe((route: Route) => {
      this.currentRoute = route;
      this.mapSeat = route.transport["mapSeat"][0];
      this.reservedSeat = route.seats;
      this.configSeatChart();

      const checkoutButton = this.containerRef.nativeElement.querySelector(".sc-cart-btn-submit");
      this.renderer.listen(checkoutButton, "click", () => {
        this.submitSeats();
      });
    });
  }

  public getSeat(index: SeatIndex): SeatInfo | undefined {
    return this.seatchart.getSeat(index);
  }

  public setSeat(index: SeatIndex, seat: SeatInfo): void {
    this.seatchart.setSeat(index, seat);
  }

  private submitSeats(): void {
    this.date$.subscribe((date) => {
      const seats: SeatDto[] = (this.seatchart as any).store.cart.map((seat) => ({
        col: seat.index["col"],
        row: seat.index["row"],
        floor: 1,
        date,
        route: {
          id: this.currentRoute.id,
        },
      }));
      const bookingDto: BookingDto = { seats };

      this.bookingService.createBooking$(bookingDto).subscribe((url) => {
        this.checkOutUrl.emit(url);
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
            price: 0,
          },
          vipSeat: {
            label: "VIP seat",
            cssClass: "vip-seat",
            price: 15,
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
