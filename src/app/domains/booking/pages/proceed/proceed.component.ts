import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { PaymentGatewayDto, Route } from "_api";
import { Observable } from "rxjs";
import { BookingState } from "src/app/core/service/booking/booking.state";
import { RouteState } from "src/app/core/service/route/route.state";

@Component({
  selector: "app-proceed",
  templateUrl: "./proceed.component.html",
  styleUrls: ["./proceed.component.scss"],
})
export class ProceedComponent implements OnInit {
  @Select(BookingState.getBookingDate) public date$: Observable<string>;
  public route: Route;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.route = this.store.selectSnapshot(RouteState.getRouteByIdAndDate);
  }

  public onCheckOut(paymentGatewayDto: PaymentGatewayDto) {
    window.location.href = paymentGatewayDto.url;
  }
}
