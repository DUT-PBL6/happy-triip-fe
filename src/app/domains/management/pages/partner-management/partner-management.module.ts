import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnerPageComponent } from "./partner-management.component";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { PendingPartnerModule } from "../../components/partner/pending-partner/pending-partner.module";
import { PendingPartnerDetailModule } from "../../components/partner/pending-partner-detail/pending-partner-detail.module";
import { TabViewModule } from "primeng/tabview";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { PartnerFormModule } from "../../components/partner/partner-form/partner-form.module";

@NgModule({
  imports: [
    CommonModule,
    ListboxModule,
    ButtonModule,
    PendingPartnerDetailModule,
    PendingPartnerModule,
    DynamicDialogModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ListboxModule,
    PartnerFormModule,
  ],
  declarations: [PartnerPageComponent],
  exports: [PartnerPageComponent],
  providers: [DialogService],
})
export class PartnerModule {}
