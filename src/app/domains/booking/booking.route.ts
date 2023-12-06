import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchRouteComponent } from "./pages/search-route/search-route.component";
import { BookingLayoutComponent } from "./layouts/booking.component";
import { ProceedComponent } from "./pages/proceed/proceed.component";
import { ProceedGuard } from "src/app/core/guards/proceed.guard";
import { BookingStatusComponent } from "./pages/booking-status/booking-status.component";

const routes: Routes = [
  {
    path: "",
    component: BookingLayoutComponent,
    children: [
      { path: "", redirectTo: "search", pathMatch: "full" },
      {
        path: "search",
        component: SearchRouteComponent,
      },
      {
        path: "proceed",
        component: ProceedComponent,
        canActivate: [ProceedGuard],
      },
      {
        path: "status",
        component: BookingStatusComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutesModule {}
