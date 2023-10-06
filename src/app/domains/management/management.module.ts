import { NgModule } from "@angular/core";
import { ManagementLayoutComponent } from "./layouts/management.component";
import { ManagementRoutesModule } from "./management.route";
import { BookingConfirmationModule } from "./pages/booking-confirmation/booking-confirmation.module";
import { RouterModule } from "@angular/router";
import { SidebarModule } from "src/app/share/components/sidebar/sidebar.module";

@NgModule({
  declarations: [ManagementLayoutComponent],
  imports: [ManagementRoutesModule, BookingConfirmationModule, RouterModule, SidebarModule],
  exports: [ManagementLayoutComponent],
})
export class ManagementModule {}
