import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FileSelectEvent } from "primeng/fileupload";
import { UploadEvent } from "src/app/core/interfaces/upload-event.interface";

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.scss"],
})
export class UploadImageComponent {
  @Input() public existedImage: string | null = null;
  @Output() public uploadedPhotoEmitter = new EventEmitter<UploadEvent>();
  public uploadedPhoto: string | ArrayBuffer;

  public uploadPhoto(event: FileSelectEvent): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.uploadedPhoto = e.target.result;
      this.uploadedPhotoEmitter.emit({ photo: e.target.result, type: "upload" });
    };
    reader.readAsDataURL(event.files[0]);
  }

  public clearUploadedPhoto(): void {
    this.uploadedPhotoEmitter.emit({ photo: this.uploadedPhoto, type: "delete" });
    this.uploadedPhoto = null;
    this.existedImage = null;
  }
}
