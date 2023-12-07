import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Passenger, PassengerDto } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetCurrentPassenger, UpdatePassenger } from "src/app/core/service/passenger/passenger.action";
import { PassengerService } from "src/app/core/service/passenger/passenger.service";
import { PassengerState } from "src/app/core/service/passenger/passenger.state";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-passenger-management",
  templateUrl: "./passenger-management.component.html",
  styleUrls: ["./passenger-management.component.scss"],
})
export class PassengerManagementComponent extends BaseDestroyable implements OnInit {
  @Select(PassengerState.getCurrentPassenger) public currentPassenger$: Observable<Passenger>;
  public currentPassenger: Passenger;

  constructor(
    private passengerService: PassengerService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.store.selectSnapshot(PassengerState.getCurrentPassenger) === undefined)
      this.store.dispatch(new GetCurrentPassenger());
    this.currentPassenger$.pipe(takeUntil(this.destroy$)).subscribe((passenger) => (this.currentPassenger = passenger));
  }

  public handlePassengerForm(passenger: PassengerDto): void {
    this.passengerService
      .updatePassenger$(passenger)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.toastService.showSuccess("Success", "Profile updated successfully!");
          this.store.dispatch(new UpdatePassenger(response));
        },
      });
  }
}
