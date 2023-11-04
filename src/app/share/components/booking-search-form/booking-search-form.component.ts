import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Option } from "src/app/core/interfaces/option.interface";
import { DATE_PICKER_FORMAT } from "src/app/share/constants";
import { ActivatedRoute, Router } from "@angular/router";
import { BookingOption } from "src/app/core/enums/booking-option.enum";
import { City } from "_api";

@Component({
  selector: "app-booking-search-form",
  templateUrl: "./booking-search-form.component.html",
  styleUrls: ["./booking-search-form.component.scss"],
})
export class BookingSearchFormComponent implements OnInit {
  public bookingSearchForm: FormGroup;
  public bookingOptions: Option<String>[];
  public selectedBookingOption = BookingOption.OneWay;
  public locations: Option<City>[] = [];
  public readonly datePickerFormat = DATE_PICKER_FORMAT;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initBookingSearchForm();
    this.initBookingOptions();
    this.initLocationOptions();

    this.route.queryParamMap.subscribe((params) => {
      if (params.get("arriveAt") !== null) {
        this.selectedBookingOption = BookingOption.RoundTrip;
        this.onBookingOptionChange();
      }

      this.bookingSearchForm.patchValue({
        fromAt: params.get("fromAt") || this.fromAt.value,
        toAt: params.get("toAt") || this.toAt.value,
        departAt: params.get("departAt") ? new Date(decodeURIComponent(params.get("departAt"))) : this.departAt.value,
        arriveAt: params.get("arriveAt") ? new Date(decodeURIComponent(params.get("arriveAt"))) : this.arriveAt?.value,
        passengers: params.get("passengers") || this.passengers.value,
      });
    });
  }

  private initBookingSearchForm(): void {
    const currentDate = new Date();

    this.bookingSearchForm = this.fb.group({
      fromAt: ["", Validators.required],
      toAt: ["", Validators.required],
      departAt: [currentDate, Validators.required],
      passengers: ["1", Validators.required],
    });
  }

  private initBookingOptions(): void {
    this.bookingOptions = Object.entries(BookingOption).map(([key, value]) => ({
      name: this.translate.instant(`share.bookingOptions.${key}`),
      value,
    }));
  }

  private initLocationOptions(): void {
    this.locations = Object.values(City).map((value) => ({
      name: this.translate.instant(`share.city.${value}`),
      value,
    }));
  }

  public onBookingOptionChange(): void {
    if (this.selectedBookingOption !== "ROUND_TRIP") {
      this.bookingSearchForm.removeControl("arriveAt");
      return;
    }
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    this.bookingSearchForm.addControl("arriveAt", new FormControl(tomorrowDate, Validators.required));
  }

  public get fromAt(): FormControl {
    return this.bookingSearchForm.get("fromAt") as FormControl;
  }

  public get toAt(): FormControl {
    return this.bookingSearchForm.get("toAt") as FormControl;
  }

  public get departAt(): FormControl {
    return this.bookingSearchForm.get("departAt") as FormControl;
  }

  public get arriveAt(): FormControl {
    return this.bookingSearchForm.get("arriveAt") as FormControl;
  }

  public get passengers(): FormControl {
    return this.bookingSearchForm.get("passengers") as FormControl;
  }

  public searchTicket(): void {
    if (!this.bookingSearchForm.valid) {
      this.bookingSearchForm.markAllAsTouched();
      return;
    }

    const queryParams = {
      ...this.bookingSearchForm.value,
      arriveAt: this.bookingSearchForm.contains("arriveAt") ? this.bookingSearchForm.value.arriveAt : null,
    };

    this.router.navigate(["/booking/search"], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: "merge",
    });
  }
}
