import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteManagementComponent } from "./route-management.component";
import { RouteFormModule } from "../../components/route/route-form/route-form.module";
import { RouteListboxModule } from "../../components/route/route-listbox/route-listbox.module";
import { NgxRerenderModule } from "ngx-rerender";
import { PendingRouteModule } from "../../components/route/pending-route/pending-route.module";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { PendingRouteDetailModule } from "../../components/route/pending-route-detail/pending-route-detail.module";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [RouteManagementComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    RouteFormModule,
    RouteListboxModule,
    NgxRerenderModule,
    PendingRouteModule,
    DynamicDialogModule,
    PendingRouteDetailModule,
  
  ],
  exports: [RouteManagementComponent],
  providers: [DialogService],
})
export class RouteManagementModule {}
