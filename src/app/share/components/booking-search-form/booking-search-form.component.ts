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
  public readonly today: Date = new Date();

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
      if (params.get("secondDt") !== null) {
        this.selectedBookingOption = BookingOption.RoundTrip;
        this.onBookingOptionChange();
      }

      this.bookingSearchForm.patchValue({
        firstCity: params.get("firstCity") || this.firstCity.value,
        secondCity: params.get("secondCity") || this.secondCity.value,
        firstDt: params.get("firstDt") ? new Date(decodeURIComponent(params.get("firstDt"))) : this.firstDt.value,
        secondDt: params.get("secondDt") ? new Date(decodeURIComponent(params.get("secondDt"))) : this.secondDt?.value,
      });
    });
  }

  private initBookingSearchForm(): void {
    this.bookingSearchForm = this.fb.group({
      firstCity: ["", Validators.required],
      secondCity: ["", Validators.required],
      firstDt: [this.today, Validators.required],
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
      this.bookingSearchForm.removeControl("secondDt");
      return;
    }
    const tomorrowDate = new Date();
    tomorrowDate.setDate(this.today.getDate() + 1);
    this.bookingSearchForm.addControl("secondDt", new FormControl(tomorrowDate, Validators.required));
  }

  public get firstCity(): FormControl {
    return this.bookingSearchForm.get("firstCity") as FormControl;
  }

  public get secondCity(): FormControl {
    return this.bookingSearchForm.get("secondCity") as FormControl;
  }

  public get firstDt(): FormControl {
    return this.bookingSearchForm.get("firstDt") as FormControl;
  }

  public get secondDt(): FormControl {
    return this.bookingSearchForm.get("secondDt") as FormControl;
  }

  public searchTicket(): void {
    if (!this.bookingSearchForm.valid) {
      this.bookingSearchForm.markAllAsTouched();
      return;
    }

    const queryParams = {
      ...this.bookingSearchForm.value,
      secondDt: this.bookingSearchForm.contains("secondDt") ? this.bookingSearchForm.value.secondDt : null,
    };

    this.router.navigate(["/booking/search"], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: "merge",
    });
  }
}
