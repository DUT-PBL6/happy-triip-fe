import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteManagementComponent } from "./route-management.component";
import { RouteFormModule } from "../../components/route-form/route-form.module";
import { RouteListboxModule } from "../../components/route-listbox/route-listbox.module";

@NgModule({
  declarations: [RouteManagementComponent],
  imports: [CommonModule, RouteFormModule, RouteListboxModule],
  exports: [RouteManagementComponent],
})
export class RouteManagementModule {}
