import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnerFormComponent } from "./partner-form.component";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, ReactiveFormsModule, PasswordModule],
  exports: [PartnerFormComponent],
  declarations: [PartnerFormComponent],
})
export class PartnerFormModule {}
