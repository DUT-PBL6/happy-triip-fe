import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchRouteComponent } from "./pages/search-route/search-route.component";
import { BookingLayoutComponent } from "./layouts/booking.component";

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutesModule {}
