import { Component, Input, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Route, Station } from "_api";
import { Observable } from "rxjs";
import { GetAllStation } from "src/app/core/service/station/station.action";
import { StationState } from "src/app/core/service/station/station.state";
import { getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";

@Component({
  selector: "app-pending-route",
  templateUrl: "./pending-route.component.html",
  styleUrls: ["./pending-route.component.scss"],
})
export class PendingRouteComponent implements OnInit {
  @Input("route") public route: Route;
  @Select(StationState.getAllStation) public stations$: Observable<Station[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.store.selectSnapshot(StationState.getAllStation).length === 0) this.store.dispatch(new GetAllStation());

    this.stations$.subscribe((stations) => {
      const stationLookup = new Map<number, string>();
      stations.forEach((station) => {
        stationLookup.set(station.id, station.name);
      });
      if (stationLookup.has(this.route.fromAt["id"])) {
        this.route.fromAt["name"] = stationLookup.get(this.route.fromAt["id"]);
      }
      if (stationLookup.has(this.route.toAt["id"])) {
        this.route.toAt["name"] = stationLookup.get(this.route.toAt["id"]);
      }
    });
  }

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
