import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { CalendarComponent } from "./calendar.component";

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, TableModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
