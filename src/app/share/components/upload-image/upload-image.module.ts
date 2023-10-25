import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadImageComponent } from "./upload-image.component";
import { FileUploadModule } from "primeng/fileupload";

@NgModule({
  declarations: [UploadImageComponent],
  imports: [CommonModule, FileUploadModule],
  exports: [UploadImageComponent],
})
export class UploadImageModule {}
