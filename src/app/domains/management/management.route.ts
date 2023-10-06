import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagementLayoutComponent } from "./layouts/management.component";
import { BookingConfirmationComponent } from "./pages/booking-confirmation/booking-confirmation.component";

const routes: Routes = [
  {
    path: "",
    component: ManagementLayoutComponent,
    // canActivate: [AuthGuard], TODO
    children: [
      { path: "", redirectTo: "booking-confirmation", pathMatch: "full" },
      { path: "booking-confirmation", component: BookingConfirmationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutesModule {}
