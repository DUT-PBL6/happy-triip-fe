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
import { PassengerGuard } from "src/app/core/guards/passenger.guard";
import { EmployeePartnerGuard } from "src/app/core/guards/employee-partner.guard";
import { BookingManagementComponent } from "./pages/booking-management/booking-management.component";
import { PassengerManagementComponent } from "./pages/passenger-management/passenger-management.component";
import { SalesReportComponent } from "./pages/sales-report/sales-report.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";

const routes: Routes = [
  {
    path: "",
    component: ManagementLayoutComponent,
    children: [
      { path: "", redirectTo: "", pathMatch: "full" },
      { path: "booking-confirmation", component: BookingConfirmationComponent, canActivate: [EmployeeGuard] },
      { path: "booking-management", component: BookingManagementComponent, canActivate: [PassengerGuard] },
      {
        path: "profile-settings",
        component: ProfileSettingsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: "transport",
        component: TransportPageComponent,
        canActivate: [PartnerGuard],
        children: [
          { path: "seat-types", component: SeatTypesFormComponent },
          { path: "map-seat", component: MapSeatFormComponent },
        ],
      },
      { path: "route", component: RouteManagementComponent, canActivate: [EmployeePartnerGuard] },
      { path: "poi-stations", component: PoiStationsComponent, canActivate: [EmployeeGuard] },
      { path: "calendar", component: CalendarComponent, canActivate: [EmployeeGuard] },
      { path: "partner", component: PartnerPageComponent, canActivate: [EmployeePartnerGuard] },
      { path: "passenger", component: PassengerManagementComponent, canActivate: [PassengerGuard] },
      { path: "news", component: NewsManagementComponent, canActivate: [PartnerGuard] },
      { path: "sales-report", component: SalesReportComponent, canActivate: [EmployeeGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutesModule {}
