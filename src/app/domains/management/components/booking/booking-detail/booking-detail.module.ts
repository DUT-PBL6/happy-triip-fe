import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingDetailComponent } from "./booking-detail.component";
import { TagModule } from "primeng/tag";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [BookingDetailComponent],
  imports: [CommonModule, TagModule, TableModule],
  exports: [BookingDetailComponent],
})
export class BookingDetailModule {}
