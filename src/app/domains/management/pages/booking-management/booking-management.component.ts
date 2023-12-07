import { TranslateService } from "@ngx-translate/core";
import { Component } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Booking } from "_api";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetBookingsByPassenger } from "src/app/core/service/booking/booking.action";
import { BookingService } from "src/app/core/service/booking/booking.service";
import { BookingState } from "src/app/core/service/booking/booking.state";
import dayjs from "dayjs";
import { BookingResult } from "../../types/booking-result.type";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { BookingDetailComponent } from "../../components/booking/booking-detail/booking-detail.component";

enum BookingStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  MoneyPending = "MONEYPENDING",
  Failed = "FAILED",
}

@Component({
  selector: "app-booking-management",
  templateUrl: "./booking-management.component.html",
  styleUrls: ["./booking-management.component.scss"],
})
export class BookingManagementComponent extends BaseDestroyable {
  @Select(BookingState.getBookingsByPassenger) public bookings$: Observable<Booking[]>;
  public statuses!: any[];
  public bookingsResult: Omit<BookingResult, "totalPrice">[] = [];
  public ref: DynamicDialogRef | undefined;

  constructor(
    private store: Store,
    private translate: TranslateService,
    private bookingService: BookingService,
    private dialogService: DialogService
  ) {
    super();
  }

  ngOnInit(): void {
    this.statuses = Object.values(BookingStatus).map((value) => ({
      label: this.translate.instant(`share.bookingStatus.${value}`),
      value,
    }));

    if (this.store.selectSnapshot(BookingState.getBookingsByPassenger).length === 0)
      this.store.dispatch(new GetBookingsByPassenger());

    this.bookings$
      .pipe(
        takeUntil(this.destroy$),
        map((bookings) => {
          return bookings.map((booking) => ({
            ...booking,
            soldOn: new Date(dayjs(booking.soldOn).format("YYYY-MM-DD")),
          }));
        })
      )
      .subscribe((bookings) => {
        this.bookingsResult = bookings;
      });
  }

  public getSeverity(status: string): string {
    switch (status) {
      case "FAILED":
        return "danger";
      case "SUCCESS":
        return "success";
      case "PENDING":
        return "info";
      case "MONEYPENDING":
        return "warning";
    }
  }

  public onRowSelect(event): void {
    this.bookingService
      .getBookingDetailByPassenger$(event.data.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((bookingDetails) => {
        this.ref = this.dialogService.open(BookingDetailComponent, {
          data: { bookingDetails },
          header: "Booking details",
          width: "70%",
          contentStyle: { overflow: "auto" },
        });
      });
  }
}
