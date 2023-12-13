import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SalesReportComponent } from "./sales-report.component";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
@NgModule({
  imports: [CommonModule, ChartModule, DropdownModule, TableModule, TagModule],
  exports: [SalesReportComponent],
  declarations: [SalesReportComponent],
})
export class SalesReportModule {}
