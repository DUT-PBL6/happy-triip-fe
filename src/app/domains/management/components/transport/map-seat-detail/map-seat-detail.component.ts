import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-map-seat-detail",
  templateUrl: "./map-seat-detail.component.html",
  styleUrls: ["./map-seat-detail.component.scss"],
})
export class MapSeatDetailComponent implements OnInit {
  public moveToNextStep: boolean = false;
  public backToPreviousStep: boolean = true;

  ngOnInit(): void {}

  public handleNextStep(nextStep: boolean): void {
    this.moveToNextStep = nextStep;
    this.backToPreviousStep = !this.backToPreviousStep;
  }

  public handlePreviousStep(previousStep: boolean): void {
    this.backToPreviousStep = previousStep;
    this.moveToNextStep = !this.moveToNextStep;
  }
}
