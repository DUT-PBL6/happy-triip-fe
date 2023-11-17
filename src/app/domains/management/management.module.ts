import { NgModule } from "@angular/core";
import { ManagementLayoutComponent } from "./layouts/management.component";
import { ManagementRoutesModule } from "./management.route";
import { BookingConfirmationModule } from "./pages/booking-confirmation/booking-confirmation.module";
import { RouterModule } from "@angular/router";
import { SidebarModule } from "src/app/share/components/sidebar/sidebar.module";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { ProfileSettingsModule } from "./pages/profile-settings/profile-settings.module";
import { TransportModule } from "./pages/transport/transport.module";
import { RouteManagementModule } from "./pages/route-management/route-management.module";
import { PoiStationsModule } from "./pages/poi-stations/poi-stations.module";
import { PartnerModule } from "./pages/partner-management/partner-management.module";

@NgModule({
  declarations: [ManagementLayoutComponent],
  imports: [
    ManagementRoutesModule,
    BookingConfirmationModule,
    RouterModule,
    SidebarModule,
    EmptyLayoutModule,
    ProfileSettingsModule,
    TransportModule,
    RouteManagementModule,
    PoiStationsModule,
    PartnerModule,
  ],
  exports: [ManagementLayoutComponent],
})
export class ManagementModule {}
