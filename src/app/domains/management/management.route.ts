import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagementLayoutComponent } from "./layouts/management.component";
import { BookingConfirmationComponent } from "./pages/booking-confirmation/booking-confirmation.component";
import { ProfileSettingsComponent } from "./pages/profile-settings/profile-settings.component";
import { TransportPageComponent } from "./pages/transport/transport.component";
import { RouteManagementComponent } from "./pages/route-management/route-management.component";
import { AdminGuard } from "src/app/core/guards/admin.guard";
import { PartnerGuard } from "src/app/core/guards/partner.guard";
import { PoiStationsComponent } from "./pages/poi-stations/poi-stations.component";

const routes: Routes = [
  {
    path: "",
    component: ManagementLayoutComponent,
    children: [
      { path: "", redirectTo: "booking-confirmation", pathMatch: "full" },
      { path: "booking-confirmation", component: BookingConfirmationComponent },
      {
        path: "profile-settings",
        component: ProfileSettingsComponent,
        canActivate: [AdminGuard],
      },
      { path: "transport", component: TransportPageComponent },
      { path: "route", component: RouteManagementComponent, canActivate: [PartnerGuard] },
      { path: "poi-stations", component: PoiStationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutesModule {}
