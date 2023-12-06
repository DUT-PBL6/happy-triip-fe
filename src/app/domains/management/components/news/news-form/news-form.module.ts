import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { CheckboxModule } from "primeng/checkbox";
import { InputNumberModule } from "primeng/inputnumber";
import { UploadImageModule } from "src/app/share/components/upload-image/upload-image.module";
import { NewsFormComponent } from "./news-form.component";
import { InputTextareaModule } from "primeng/inputtextarea";
import { EditorModule } from "primeng/editor";

@NgModule({
  declarations: [NewsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    TranslateModule,
    EditorModule,
    CheckboxModule,
    InputNumberModule,
    UploadImageModule,
    InputTextareaModule,
  ],
  exports: [NewsFormComponent],
})
export class NewsFormModule {}
