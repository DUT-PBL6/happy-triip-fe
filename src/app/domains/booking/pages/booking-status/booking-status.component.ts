import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Booking, PaymentGatewayResDto } from "_api";
import { Observable, of } from "rxjs";
import { BookingService } from "src/app/core/service/booking/booking.service";

@Component({
  selector: "app-booking-status",
  templateUrl: "./booking-status.component.html",
  styleUrls: ["./booking-status.component.scss"],
})
export class BookingStatusComponent implements OnInit {
  public booking$: Observable<Booking>;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      if (params.get("result") === null) {
        this.router.navigate(["/home"]);
        return;
      }
      const paymentGatewayResDto: PaymentGatewayResDto = {
        result: params.get("result"),
        checksum: params.get("checksum") || "",
      };
      this.bookingService.updateBookingStatus$(paymentGatewayResDto).subscribe((data: Booking) => {
        this.bookingService.getBookingDetailByPassenger$(data.id).subscribe((booking: Booking) => {
          this.booking$ = of(booking);
        });
      });
    });
  }
}
