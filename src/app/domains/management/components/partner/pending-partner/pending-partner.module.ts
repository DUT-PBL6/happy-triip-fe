import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PendingPartnerComponent } from "./pending-partner.component";
import { TableModule } from "primeng/table";

@NgModule({
  imports: [CommonModule, TableModule],
  exports: [PendingPartnerComponent],
  declarations: [PendingPartnerComponent],
})
export class PendingPartnerModule {}
