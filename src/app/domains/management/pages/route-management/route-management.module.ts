import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteManagementComponent } from "./route-management.component";
import { RouteFormModule } from "../../components/route/route-form/route-form.module";
import { RouteListboxModule } from "../../components/route/route-listbox/route-listbox.module";
import { NgxRerenderModule } from "ngx-rerender";

@NgModule({
  declarations: [RouteManagementComponent],
  imports: [CommonModule, RouteFormModule, RouteListboxModule, NgxRerenderModule],
  exports: [RouteManagementComponent],
})
export class RouteManagementModule {}
