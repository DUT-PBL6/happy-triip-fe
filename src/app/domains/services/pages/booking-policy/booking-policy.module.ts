import { NgModule, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingPolicyComponent } from "./booking-policy.component";

@NgModule({
  declarations: [BookingPolicyComponent],
  imports: [CommonModule],
  exports: [BookingPolicyComponent],
})
export class BookingPolicyModule {}
