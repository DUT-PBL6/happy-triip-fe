import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Route } from "_api";
import { getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";

@Component({
  selector: "app-pending-route",
  templateUrl: "./pending-route.component.html",
  styleUrls: ["./pending-route.component.scss"],
})
export class PendingRouteComponent implements OnInit {
  @Input("route") public route: Route;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public getTime(date: string): string {
    return getTime(date);
  }

  public getHoursDifference(departAt: string, arriveAt: string): string {
    return (
      this.route.ndays * 24 +
      getHoursDifference(this.parseTimeStringToDateString(departAt), this.parseTimeStringToDateString(arriveAt))
    ).toFixed(1);
  }

  public parseTimeStringToDateString(timeString: string): string {
    return parseTimeStringToDate(timeString).toString();
  }
}
