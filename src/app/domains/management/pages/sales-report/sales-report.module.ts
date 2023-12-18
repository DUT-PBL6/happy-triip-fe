import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SalesReportComponent } from "./sales-report.component";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { TabViewModule } from "primeng/tabview";
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SalesReportComponent],
  imports: [
    CommonModule,
    ChartModule,
    DropdownModule,
    TableModule,
    TagModule,
    TabViewModule,
    CalendarModule,
    FormsModule,
  ],
  exports: [SalesReportComponent],
})
export class SalesReportModule {}
