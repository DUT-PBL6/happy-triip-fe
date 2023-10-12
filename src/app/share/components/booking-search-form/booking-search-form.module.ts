import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { BookingSearchFormComponent } from "./booking-search-form.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputNumberModule } from "primeng/inputnumber";

@NgModule({
  declarations: [BookingSearchFormComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    SelectButtonModule,
    InputNumberModule,
    TranslateModule,
  ],
  exports: [BookingSearchFormComponent],
})
export class BookingSearchFormModule {}
