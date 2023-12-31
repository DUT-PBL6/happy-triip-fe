import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingConfirmationComponent } from "./booking-confirmation.component";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { TagModule } from "primeng/tag";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
@NgModule({
  declarations: [BookingConfirmationComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    ConfirmDialogModule,
    CalendarModule,
  ],
  exports: [BookingConfirmationComponent],
})
export class BookingConfirmationModule {}
