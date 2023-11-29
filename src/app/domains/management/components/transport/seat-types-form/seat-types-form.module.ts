import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatTypesFormComponent } from "./seat-types-form.component";
import { CardModule } from "primeng/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  declarations: [SeatTypesFormComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
  ],
  exports: [SeatTypesFormComponent],
})
export class SeatTypesFormModule {}
