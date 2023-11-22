import { NgModule } from "@angular/core";
import { BookingLayoutComponent } from "./layouts/booking.component";
import { BookingRoutesModule } from "./booking.route";
import { SearchRouteModule } from "./pages/search-route/search-route.module";
import { RouterModule } from "@angular/router";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { ProceedModule } from "./pages/proceed/proceed.module";
import { CheckoutSuccessModule } from "./pages/checkout-success/checkout-success.module";

@NgModule({
  declarations: [BookingLayoutComponent],
  imports: [
    RouterModule,
    BookingRoutesModule,
    SearchRouteModule,
    EmptyLayoutModule,
    ProceedModule,
    CheckoutSuccessModule,
  ],
  exports: [BookingLayoutComponent],
})
export class BookingModule {}
