import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerFormComponent } from "./passenger-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, ReactiveFormsModule, PasswordModule],
  exports: [PassengerFormComponent],
  declarations: [PassengerFormComponent],
})
export class PassengerFormModule {}
