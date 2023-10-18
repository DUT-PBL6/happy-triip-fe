import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagementLayoutComponent } from "./layouts/management.component";
import { BookingConfirmationComponent } from "./pages/booking-confirmation/booking-confirmation.component";
import { ProfileSettingsComponent } from "./pages/profile-settings/profile-settings.component";

const routes: Routes = [
  {
    path: "",
    component: ManagementLayoutComponent,
    // canActivate: [AuthGuard], TODO
    children: [
      { path: "", redirectTo: "profile-settings", pathMatch: "full" },
      { path: "booking-confirmation", component: BookingConfirmationComponent },
      { path: "profile-settings", component: ProfileSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutesModule {}
