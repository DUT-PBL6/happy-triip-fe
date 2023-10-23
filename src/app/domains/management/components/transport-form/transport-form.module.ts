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
  ],
  exports: [TransportFormComponent],
})
export class TransportFormModule {}
