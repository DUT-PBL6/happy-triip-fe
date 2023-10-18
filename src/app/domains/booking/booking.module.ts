import { NgModule } from "@angular/core";
import { BookingLayoutComponent } from "./layouts/booking.component";
import { BookingRoutesModule } from "./booking.route";
import { SearchRouteModule } from "./pages/search-route/search-route.module";
import { RouterModule } from "@angular/router";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";

@NgModule({
  declarations: [BookingLayoutComponent],
  imports: [RouterModule, BookingRoutesModule, SearchRouteModule, EmptyLayoutModule],
  exports: [BookingLayoutComponent],
})
export class BookingModule {}
