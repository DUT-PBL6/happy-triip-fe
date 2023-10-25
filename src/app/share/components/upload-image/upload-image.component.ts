import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FileSelectEvent, FileUpload } from "primeng/fileupload";

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.scss"],
})
export class UploadImageComponent {
  @Input() public existedImage: string | null = null;
  @Output() public uploadedPhotoEmitter = new EventEmitter<string | ArrayBuffer>();
  public uploadedPhoto: string | ArrayBuffer;

  public uploadPhoto(event: FileSelectEvent): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.uploadedPhoto = e.target.result;
      this.uploadedPhotoEmitter.emit(e.target.result);
    };
    reader.readAsDataURL(event.files[0]);
  }

  public clearUploadedPhoto(): void {
    this.uploadedPhoto = null;
    this.existedImage = null;
    this.uploadedPhotoEmitter.emit(null);
  }
}
