import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { formatDate, getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { TranslateService } from "@ngx-translate/core";
import { getKeyFromEnumValue } from "src/app/share/helpers/enum.helper";
import { Route, RouteResponse, TypeVehical, Utility } from "_api";
import { RouteService } from "src/app/core/service/route/route.service";

@Component({
  selector: "app-result-card",
  templateUrl: "./result-card.component.html",
  styleUrls: ["./result-card.component.scss"],
})
export class ResultCardComponent implements OnInit {
  @Input() route: RouteResponse | Route;
  public isViewDetails: boolean = false;
  public sanitizedFromAtEmbedMapLink: SafeResourceUrl;
  public sanitizedToAtEmbedMapLink: SafeResourceUrl;
  public readonly vehicleType = TypeVehical;
  public readonly Utility = Utility;
  public isFetchDetail = false;

  constructor(
    public sanitizer: DomSanitizer,
    public translate: TranslateService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {}

  public handleViewDetails(): void {
    if (this.isFetchDetail) {
      this.isViewDetails = !this.isViewDetails;
      return;
    }
    const formatDate = this.formatDate((this.route as RouteResponse).date);
    this.routeService.getRouteByIdAndDate$(this.route.id, formatDate).subscribe((routeDetails: Route) => {
      this.route = { ...this.route, ...routeDetails };
      this.sanitizedFromAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.route.fromAt["embedGmapLink"]
      );
      this.sanitizedToAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.toAt["embedGmapLink"]);
      this.isViewDetails = !this.isViewDetails;
      this.isFetchDetail = true;
    });
  }

  public getTime(date: string): string {
    return getTime(date);
  }

  public formatDate(date: string): string {
    return formatDate(date);
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
