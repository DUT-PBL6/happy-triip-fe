import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { PaymentGatewayResDto } from "_api";
import { BookingService } from "src/app/core/service/booking/booking.service";

@Component({
  selector: "app-booking-status",
  templateUrl: "./booking-status.component.html",
  styleUrls: ["./booking-status.component.scss"],
})
export class BookingStatusComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      if (params.get("result") !== null) {
        const paymentGatewayResDto: PaymentGatewayResDto = {
          result: params.get("result"),
          checksum: params.get("checksum") || "",
        };
        this.bookingService.updateBookingStatus$(paymentGatewayResDto).subscribe((_) => {
          this.router.navigate(["/home"]);
        });
      }
    });
  }
}
