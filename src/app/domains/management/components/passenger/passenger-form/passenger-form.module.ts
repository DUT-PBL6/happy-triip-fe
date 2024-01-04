import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerFormComponent } from "./passenger-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { PasswordFormModule } from "../../password/password-form/password-form.module";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordFormModule,
  ],
  exports: [PassengerFormComponent],
  declarations: [PassengerFormComponent],
})
export class PassengerFormModule {}
