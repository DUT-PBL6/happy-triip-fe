import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Booking, City, TypeVehical } from "_api";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { Option } from "src/app/core/interfaces/option.interface";
import { AcceptBooking, DenyBooking, GetBookingMoneyPending } from "src/app/core/service/booking/booking.action";
import { BookingState } from "src/app/core/service/booking/booking.state";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService } from "primeng/api";
import { BookingService } from "src/app/core/service/booking/booking.service";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import dayjs from "dayjs";
import { BookingResult } from "../../types/booking-result.type";

@Component({
  selector: "app-booking-confirmation",
  templateUrl: "./booking-confirmation.component.html",
  styleUrls: ["./booking-confirmation.component.scss"],
})
export class BookingConfirmationComponent extends BaseDestroyable implements OnInit {
  @Select(BookingState.getBookingMoneyPending) public bookings$: Observable<Booking[]>;
  public vehicleType: Option<TypeVehical>[] = [];
  public locations: Option<City>[] = [];
  public ref: DynamicDialogRef | undefined;
  public bookingsResult: BookingResult[] = [];

  constructor(
    private toastService: ToastService,
    private store: Store,
    private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private bookingService: BookingService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.store.selectSnapshot(BookingState.getBookingMoneyPending).length === 0)
      this.store.dispatch(new GetBookingMoneyPending());

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

    this.initVehicleType();
    this.initLocationOptions();
  }

  private initVehicleType(): void {
    this.vehicleType = Object.entries(TypeVehical).map(([key, value]) => ({
      name: this.translate.instant(`share.vehicleType.${key}`),
      value,
    }));
  }

  private initLocationOptions(): void {
    this.locations = Object.values(City).map((value) => ({
      name: this.translate.instant(`share.city.${value}`),
      value,
    }));
  }

  public handleBookingAction(event: Event, isAccept: boolean, id: number): void {
    const confirmationMessage = isAccept
      ? "Are you sure that you want to accept this booking?"
      : "Are you sure that you want to deny this booking?";
    const successMessage = isAccept ? "This booking is accepted successfully!" : "This booking is denied successfully!";

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: confirmationMessage,
      icon: "pi pi-exclamation-triangle",

      accept: () => {
        const bookingAction$ = isAccept ? this.bookingService.acceptBooking$(id) : this.bookingService.denyBooking$(id);

        bookingAction$.pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            this.store.dispatch(isAccept ? new AcceptBooking(response.id) : new DenyBooking(response.id));
            this.store.dispatch(new GetBookingMoneyPending());
            this.toastService.showSuccess("Success", successMessage);

            if (this.ref) {
              this.ref.close();
            }
          },
        });
      },
      reject: () => {
        if (this.ref) {
          this.ref.close();
        }
      },
    });
  }
}
