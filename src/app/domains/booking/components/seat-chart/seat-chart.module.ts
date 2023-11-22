import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatChartComponent } from "./seat-chart.component";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [SeatChartComponent],
  imports: [CommonModule, ButtonModule],
  exports: [SeatChartComponent],
})
export class SeatChartModule {}
