import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransportFormComponent } from "./transport-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { CheckboxModule } from "primeng/checkbox";
import { InputNumberModule } from "primeng/inputnumber";
import { UploadImageModule } from "src/app/share/components/upload-image/upload-image.module";
import { MapSeatDetailModule } from "../map-seat-detail/map-seat-detail.module";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { MapSeatPreviewModule } from "../map-seat-preview/map-seat-preview.module";

@NgModule({
  declarations: [TransportFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    TranslateModule,
    CheckboxModule,
    InputNumberModule,
    UploadImageModule,
    MapSeatDetailModule,
    DynamicDialogModule,
    MapSeatPreviewModule,
  ],
  exports: [TransportFormComponent],
  providers: [DialogService],
})
export class TransportFormModule {}
