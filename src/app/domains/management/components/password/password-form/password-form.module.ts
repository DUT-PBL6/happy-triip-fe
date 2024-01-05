import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PasswordFormComponent } from "./password-form.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";

@NgModule({
  imports: [CommonModule, InputTextModule, FormsModule, PasswordModule, ButtonModule, ReactiveFormsModule, ToastModule],
  declarations: [PasswordFormComponent],
  exports: [PasswordFormComponent],
})
export class PasswordFormModule {}
