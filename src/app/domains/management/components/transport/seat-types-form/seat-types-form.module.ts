import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatTypesFormComponent } from "./seat-types-form.component";
import { CardModule } from "primeng/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [SeatTypesFormComponent],
  imports: [CommonModule, CardModule, FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  exports: [SeatTypesFormComponent],
})
export class SeatTypesFormModule {}
