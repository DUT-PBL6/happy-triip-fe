import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapSeatDetailComponent } from "./map-seat-detail.component";
import { StepsModule } from "primeng/steps";
import { RouterModule } from "@angular/router";
import { MapSeatFormModule } from "../map-seat-form/map-seat-form.module";
import { SeatTypesFormModule } from "../seat-types-form/seat-types-form.module";

@NgModule({
  declarations: [MapSeatDetailComponent],
  imports: [CommonModule, RouterModule, MapSeatFormModule, SeatTypesFormModule],
  exports: [MapSeatDetailComponent],
})
export class MapSeatDetailModule {}
