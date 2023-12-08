import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatChartComponent } from "./seat-chart.component";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from "primeng/api";

@NgModule({
  declarations: [SeatChartComponent],
  imports: [CommonModule, ButtonModule, ConfirmDialogModule, ToastModule],
  exports: [SeatChartComponent],
  providers: [ConfirmationService, MessageService],
})
export class SeatChartModule {}
