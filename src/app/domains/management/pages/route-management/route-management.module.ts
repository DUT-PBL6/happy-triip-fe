import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteManagementComponent } from "./route-management.component";
import { RouteFormModule } from "../../components/route/route-form/route-form.module";
import { RouteListboxModule } from "../../components/route/route-listbox/route-listbox.module";
import { NgxRerenderModule } from "ngx-rerender";
import { PendingRouteModule } from "../../components/route/pending-route/pending-route.module";

@NgModule({
  declarations: [RouteManagementComponent],
  imports: [CommonModule, RouteFormModule, RouteListboxModule, NgxRerenderModule, PendingRouteModule],
  exports: [RouteManagementComponent],
})
export class RouteManagementModule {}
