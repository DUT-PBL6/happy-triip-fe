import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { getHoursDifference, getTime } from "src/app/share/helpers/date.helper";
import { TranslateService } from "@ngx-translate/core";
import { getKeyFromEnumValue } from "src/app/share/helpers/enum.helper";
import { Route, TypeVehical, Utility } from "_api";

@Component({
  selector: "app-result-card",
  templateUrl: "./result-card.component.html",
  styleUrls: ["./result-card.component.scss"],
})
export class ResultCardComponent implements OnInit {
  @Input() route: Route;
  public isViewDetails: boolean = false;
  public sanitizedFromAtEmbedMapLink: SafeResourceUrl;
  public sanitizedToAtEmbedMapLink: SafeResourceUrl;
  public readonly TransportType = TypeVehical;
  public readonly Utility = Utility;

  constructor(
    private sanitizer: DomSanitizer,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.sanitizedFromAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.fromAt["embedMapLink"]);
    this.sanitizedToAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.toAt["embedMapLink"]);
  }

  public getTime(date: string): string {
    return getTime(date);
  }

  public getHoursDifference(departAt: string, arriveAt: string): number {
    return getHoursDifference(departAt, arriveAt);
  }

  public getKey<T>(value: string, enumObject: T): string {
    return getKeyFromEnumValue(enumObject, value);
  }
}
