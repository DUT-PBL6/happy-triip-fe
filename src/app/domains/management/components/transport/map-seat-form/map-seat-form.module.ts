import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapSeatFormComponent } from "./map-seat-form.component";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MapSeatFormComponent],
  imports: [CommonModule, ButtonModule, FormsModule, ReactiveFormsModule],
  exports: [MapSeatFormComponent],
})
export class MapSeatFormModule {}
