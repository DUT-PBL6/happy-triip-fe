import { Component, Input } from "@angular/core";
import { Route, TypeVehical } from "_api";
import { DATE_FORMAT } from "src/app/share/constants";
import { formatDate, getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { getKeyFromEnumValue } from "src/app/share/helpers/enum.helper";

@Component({
  selector: "app-route-overview",
  templateUrl: "./route-overview.component.html",
  styleUrls: ["./route-overview.component.scss"],
})
export class RouteOverviewComponent {
  @Input() public route: Route;
  @Input() public date: string;
  public readonly vehicleType = TypeVehical;

  public getTime(date: string): string {
    return getTime(date);
  }

  public formatDate(date: string): string {
    return formatDate(date, DATE_FORMAT);
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

  public getKey<T>(value: string, enumObject: T): string {
    return getKeyFromEnumValue(enumObject, value);
  }
}
