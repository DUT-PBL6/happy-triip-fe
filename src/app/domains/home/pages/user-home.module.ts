import { NgModule } from "@angular/core";
import { UserHomeComponent } from "./user-home.component";
import { CommonModule } from "@angular/common";
import { BookingSearchFormModule } from "../components/booking-search-form/booking-search-form.module";

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, BookingSearchFormModule],
  exports: [UserHomeComponent],
})
export class UserHomeModule {}
