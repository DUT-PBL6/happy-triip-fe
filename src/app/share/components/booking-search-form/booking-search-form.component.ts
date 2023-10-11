import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Option } from "src/app/core/interfaces/option.interface";
import { Province } from "../../../domains/home/types/province.type";
import { Observable } from "rxjs";
import { ProvinceService } from "src/app/core/service/province/province.service";
import { DATE_PICKER_FORMAT } from "src/app/share/constants";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-booking-search-form",
  templateUrl: "./booking-search-form.component.html",
  styleUrls: ["./booking-search-form.component.scss"],
})
export class BookingSearchFormComponent implements OnInit {
  public bookingSearchForm: FormGroup;
  public bookingOptions: Option<String>[];
  public selectedBookingOption = "ONE_WAY";
  public locations$: Observable<Province[]>;
  public readonly datePickerFormat = DATE_PICKER_FORMAT;

  constructor(
    private provinceService: ProvinceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initBookingSearchForm();
    this.bookingOptions = [
      { name: "One Way", value: "ONE_WAY" },
      { name: "Round Trip", value: "ROUND_TRIP" },
    ];
    this.locations$ = this.provinceService.getProvinces$();
  }

  private initBookingSearchForm(): void {
    const currentDate = new Date();
    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);

    this.bookingSearchForm = this.fb.group({
      fromAt: ["", Validators.required],
      toAt: ["", Validators.required],
      departAt: [currentDate, Validators.required],
      arriveAt: [tomorrowDate],
      passengers: ["1", Validators.required],
    });
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

    this.router.navigate(["../booking/search"], {
      relativeTo: this.route,
      queryParams: this.bookingSearchForm.value,
      queryParamsHandling: "merge",
    });
  }
}
