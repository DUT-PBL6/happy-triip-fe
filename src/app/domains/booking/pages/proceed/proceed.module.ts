import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProceedComponent } from "./proceed.component";
import { SeatChartModule } from "../../components/seat-chart/seat-chart.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { RouteOverviewModule } from "../../components/route-overview/route-overview.module";

@NgModule({
  declarations: [ProceedComponent],
  imports: [CommonModule, SeatChartModule, CopyrightModule, RouteOverviewModule],
  exports: [ProceedComponent],
})
export class ProceedModule {}
