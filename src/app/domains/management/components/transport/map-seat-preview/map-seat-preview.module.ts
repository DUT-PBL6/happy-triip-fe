import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapSeatPreviewComponent } from "./map-seat-preview.component";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  declarations: [MapSeatPreviewComponent],
  imports: [CommonModule, CheckboxModule],
  exports: [MapSeatPreviewComponent],
})
export class MapSeatPreviewModule {}
