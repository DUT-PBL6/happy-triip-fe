import { BookingStatusComponent } from "./booking-status.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteOverviewModule } from "../../components/route-overview/route-overview.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { TagModule } from "primeng/tag";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BookingStatusComponent],
  imports: [CommonModule, CopyrightModule, RouteOverviewModule, TagModule, RouterModule],
  exports: [BookingStatusComponent],
})
export class BookingStatusModule {}
