import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { AuthRoutesModule } from "src/app/domains/auth/auth.route";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { RegisterComponent } from "./register.component";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutesModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
  exports: [RegisterComponent],
})
export class RegisterModule {}
