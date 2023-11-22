import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProceedComponent } from "./proceed.component";
import { SeatChartModule } from "../../components/seat-chart/seat-chart.module";

@NgModule({
  declarations: [ProceedComponent],
  imports: [CommonModule, SeatChartModule],
  exports: [ProceedComponent],
})
export class ProceedModule {}
