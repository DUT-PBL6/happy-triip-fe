import { Component, EventEmitter, Output } from "@angular/core";
import { SeatService } from "../../../services/seat.service";

@Component({
  selector: "app-map-seat-form",
  templateUrl: "./map-seat-form.component.html",
  styleUrls: ["./map-seat-form.component.scss"],
})
export class MapSeatFormComponent {
  @Output() backToPreviousStep = new EventEmitter<boolean>(false);

  constructor(public seatService: SeatService) {}

  public previousStep(): void {
    this.backToPreviousStep.emit(true);
  }

  public complete(): void {}
}
