import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Route } from "src/app/core/models/route.type";
import { getHoursDifference, getTime } from "src/app/share/helpers/date.helper";

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

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.sanitizedFromAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.fromAt["embedMapLink"]);
    this.sanitizedToAtEmbedMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.route.toAt["embedMapLink"]);
  }

  public getTime(date: Date): string {
    return getTime(date);
  }

  public getHoursDifference(departAt: Date, arriveAt: Date): number {
    return getHoursDifference(departAt, arriveAt);
  }
}
