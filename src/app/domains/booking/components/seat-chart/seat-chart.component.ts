import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Select } from "@ngxs/store";
import { Route, Seat } from "_api";
import { Observable } from "rxjs";
import Seatchart, { Options, SeatIndex, SeatInfo, SeatType, SeatTypeDefault } from "seatchart";
import { RouteState } from "src/app/core/service/route/route.state";

@Component({
  selector: "app-seat-chart",
  templateUrl: "./seat-chart.component.html",
  styleUrls: ["./seat-chart.component.scss"],
})
export class SeatChartComponent implements OnInit {
  @ViewChild("container", { static: true }) public containerRef!: ElementRef<HTMLDivElement>;
  @Select(RouteState.getRouteByIdAndDate) public route$: Observable<Route>;
  public seatchart!: Seatchart;
  public mapSeat: number[][] = [];
  public reservedSeat: Seat[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.route$.subscribe((route: Route) => {
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
    console.log("Selected seats:", (this.seatchart as any).store.cart);
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
