import { Component } from "@angular/core";
import { Booking } from "_api";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";

@Component({
  selector: "app-booking-detail",
  templateUrl: "./booking-detail.component.html",
  styleUrls: ["./booking-detail.component.scss"],
})
export class BookingDetailComponent {
  public bookingDetails: Booking;

  constructor(private config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.bookingDetails = this.config.data["bookingDetails"];
    console.log(this.bookingDetails);
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

  public getSeatName(row: number, col: number): string {
    const rows = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
    return `${rows[col]}${row + 1}`;
  }

  public getHoursDifference(departAt: string, arriveAt: string, ndays: number): string {
    return (
      ndays * 24 +
      getHoursDifference(this.parseTimeStringToDateString(departAt), this.parseTimeStringToDateString(arriveAt))
    ).toFixed(1);
  }

  public parseTimeStringToDateString(timeString: string): string {
    return parseTimeStringToDate(timeString).toString();
  }

  public getTime(date: string): string {
    return getTime(date);
  }
}
