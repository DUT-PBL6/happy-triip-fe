import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingManagementComponent } from "./booking-management.component";

@NgModule({
  declarations: [BookingManagementComponent],
  imports: [CommonModule],
  exports: [BookingManagementComponent],
})
export class BookingManagementModule {}
