import { Component } from "@angular/core";

@Component({
  selector: "app-about-us-page",
  templateUrl: "./about-us-page.component.html",
  styleUrls: ["./about-us-page.component.scss"],
})
export class AboutUsPageComponent {
  public getNumberRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }
}
