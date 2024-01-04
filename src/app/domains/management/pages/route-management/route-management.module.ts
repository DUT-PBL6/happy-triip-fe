import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteManagementComponent } from "./route-management.component";
import { RouteFormModule } from "../../components/route/route-form/route-form.module";
import { RouteListboxModule } from "../../components/route/route-listbox/route-listbox.module";
import { NgxRerenderModule } from "ngx-rerender";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { PendingRouteDetailModule } from "../../components/route/pending-route-detail/pending-route-detail.module";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { TagModule } from "primeng/tag";
import { MultiSelectModule } from "primeng/multiselect";

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
    DynamicDialogModule,
    PendingRouteDetailModule,
    TableModule,
    InputTextModule,
    TagModule,
    MultiSelectModule,
  ],
  exports: [RouteManagementComponent],
  providers: [DialogService],
})
export class RouteManagementModule {}
