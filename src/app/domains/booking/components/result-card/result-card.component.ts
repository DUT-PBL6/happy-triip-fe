import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { formatDate, getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { TranslateService } from "@ngx-translate/core";
import { getKeyFromEnumValue } from "src/app/share/helpers/enum.helper";
import { Route, RouteResponse, TypeVehical, Utility } from "_api";
import { RouteService } from "src/app/core/service/route/route.service";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { GetRouteByIdAndDate, UpdateBookingDate } from "src/app/core/service/route/route.action";
import cacheService from "src/lib/cache-service";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-result-card",
  templateUrl: "./result-card.component.html",
  styleUrls: ["./result-card.component.scss"],
})
export class ResultCardComponent {
  @Input() route: RouteResponse | Route;
  @Input() date: string;
  public isViewDetails: boolean = false;
  public sanitizedFromAtEmbedMapLink: SafeResourceUrl;
  public sanitizedToAtEmbedMapLink: SafeResourceUrl;
  public readonly vehicleType = TypeVehical;
  public readonly Utility = Utility;
  public isFetchDetail = false;
  public formattedDate: string;

  constructor(
    public sanitizer: DomSanitizer,
    public translate: TranslateService,
    private routeService: RouteService,
    private router: Router,
    private store: Store,
    private toastService: ToastService
  ) {}

  public handleViewDetails(): void {
    if (this.isFetchDetail) {
      this.isViewDetails = !this.isViewDetails;
      return;
    }
    this.formattedDate = this.formatDate((this.route as RouteResponse).date);
    this.routeService.getRouteByIdAndDate$(this.route.id, this.formattedDate).subscribe((routeDetails: Route) => {
      this.route = { ...this.route, ...routeDetails };
      this.sanitizedFromAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.route.fromAt["embedGmapLink"]
      );
      this.sanitizedToAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.toAt["embedGmapLink"]);
      this.isViewDetails = !this.isViewDetails;
      this.isFetchDetail = true;
    });
  }

  public handleBookNow(routeId: number): void {
    this.routeService.getRouteByIdAndDate$(this.route.id, this.formattedDate).subscribe((routeDetail) => {
      const user = Object(cacheService.getUserInfo());
      this.store.dispatch(new GetRouteByIdAndDate(routeDetail));
      this.store.dispatch(new UpdateBookingDate(this.date));

      if (cacheService.getValue("accessToken") && user.userRole === "PASSENGER") {
        this.router.navigate(["/booking/proceed"]);
        return;
      }

      this.router.navigate(["/auth/login"], { queryParams: { userRole: "passenger" } });
      this.toastService.showInfo("Info", "Please login as a passenger before booking!");
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
