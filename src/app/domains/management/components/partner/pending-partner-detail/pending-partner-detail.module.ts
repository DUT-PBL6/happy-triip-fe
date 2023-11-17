import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PendingPartnerDetailComponent } from "./pending-partner-detail.component";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ConfirmPopupModule } from "primeng/confirmpopup";

@NgModule({
  imports: [CommonModule, ButtonModule, TableModule, ConfirmPopupModule],
  exports: [PendingPartnerDetailComponent],
  declarations: [PendingPartnerDetailComponent],
})
export class PendingPartnerDetailModule {}
