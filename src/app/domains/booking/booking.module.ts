import { NgModule } from "@angular/core";
import { BookingLayoutComponent } from "./layouts/booking.component";
import { BookingRoutesModule } from "./booking.route";
import { SearchRouteModule } from "./pages/search-route/search-route.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BookingLayoutComponent],
  imports: [RouterModule, BookingRoutesModule, SearchRouteModule],
  exports: [BookingLayoutComponent],
})
export class BookingModule {}
