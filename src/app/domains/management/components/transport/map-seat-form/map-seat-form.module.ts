import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapSeatFormComponent } from "./map-seat-form.component";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { ColorPickerModule } from "primeng/colorpicker";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [MapSeatFormComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    CheckboxModule,
    ColorPickerModule,
    TooltipModule,
  ],
  exports: [MapSeatFormComponent],
})
export class MapSeatFormModule {}
