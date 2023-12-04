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
import { PartnerPageComponent } from "./pages/partner-management/partner-management.component";
import { EmployeeGuard } from "src/app/core/guards/employee.guard";
import { SeatTypesFormComponent } from "./components/transport/seat-types-form/seat-types-form.component";
import { MapSeatFormComponent } from "./components/transport/map-seat-form/map-seat-form.component";
import { NewsManagementComponent } from "./pages/news-management/news-management.component";
// import { NewsPageComponent } from "./pages/news-management/news-management.component";

const routes: Routes = [
  {
    path: "",
    component: ManagementLayoutComponent,
    children: [
      { path: "", redirectTo: "", pathMatch: "full" },
      { path: "booking-confirmation", component: BookingConfirmationComponent, canActivate: [EmployeeGuard] },
      {
        path: "profile-settings",
        component: ProfileSettingsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: "transport",
        component: TransportPageComponent,
        children: [
          { path: "seat-types", component: SeatTypesFormComponent },
          { path: "map-seat", component: MapSeatFormComponent },
        ],
      },
      { path: "route", component: RouteManagementComponent },
      { path: "poi-stations", component: PoiStationsComponent, canActivate: [EmployeeGuard] },
      { path: "partner", component: PartnerPageComponent },
      { path: "news", component: NewsManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutesModule {}
