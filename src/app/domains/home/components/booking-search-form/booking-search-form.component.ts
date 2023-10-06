import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Option } from "src/app/core/interfaces/option.interface";
import { Province } from "../../types/province.type";
import { Observable } from "rxjs";
import { ProvinceService } from "src/app/core/service/province/province.service";
import { DATE_PICKER_FORMAT } from "src/app/share/constants";

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
    private fb: FormBuilder
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
    this.bookingSearchForm = this.fb.group({
      from: [""],
      to: [""],
      departDate: [new Date()],
      returnDate: [""],
      passengers: [""],
    });
  }

  public get from(): FormControl {
    return this.bookingSearchForm.get("from") as FormControl;
  }

  public get to(): FormControl {
    return this.bookingSearchForm.get("to") as FormControl;
  }

  public get departDate(): FormControl {
    return this.bookingSearchForm.get("departDate") as FormControl;
  }

  public get returnDate(): FormControl {
    return this.bookingSearchForm.get("returnDate") as FormControl;
  }

  public get passengers(): FormControl {
    return this.bookingSearchForm.get("passengers") as FormControl;
  }

  public searchTicket(): void {}
}
