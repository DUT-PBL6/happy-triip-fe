import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnerPageComponent } from "./partner-management.component";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { PendingPartnerDetailModule } from "../../components/partner/pending-partner-detail/pending-partner-detail.module";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { PartnerFormModule } from "../../components/partner/partner-form/partner-form.module";
import { TagModule } from "primeng/tag";
import { InputTextModule } from "primeng/inputtext";
@NgModule({
  declarations: [PartnerPageComponent],
  imports: [
    CommonModule,
    ListboxModule,
    ButtonModule,
    PendingPartnerDetailModule,
    DynamicDialogModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ListboxModule,
    PartnerFormModule,
    TagModule,
    InputTextModule,
  ],
  exports: [PartnerPageComponent],
  providers: [DialogService],
})
export class PartnerModule {}
