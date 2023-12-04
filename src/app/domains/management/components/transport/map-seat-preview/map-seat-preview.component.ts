import { Component, Input } from "@angular/core";

@Component({
  selector: "app-map-seat-preview",
  templateUrl: "./map-seat-preview.component.html",
  styleUrls: ["./map-seat-preview.component.scss"],
})
export class MapSeatPreviewComponent {
  @Input() public mapSeatMatrix: number[][] = [];
}
