import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingManagementComponent } from "./booking-management.component";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { TagModule } from "primeng/tag";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { BookingDetailModule } from "../../components/booking/booking-detail/booking-detail.module";

@NgModule({
  declarations: [BookingManagementComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    DynamicDialogModule,
    BookingDetailModule,
  ],
  exports: [BookingManagementComponent],
  providers: [DialogService],
})
export class BookingManagementModule {}
