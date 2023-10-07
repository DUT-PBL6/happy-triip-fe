import { NgModule } from "@angular/core";
import { UserHomeComponent } from "./user-home.component";
import { CommonModule } from "@angular/common";
import { BookingSearchFormModule } from "../components/booking-search-form/booking-search-form.module";
import { PopularRoutesModule } from "../components/popular-routes/popular-routes.module";

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, BookingSearchFormModule, PopularRoutesModule],
  exports: [UserHomeComponent],
})
export class UserHomeModule {}
