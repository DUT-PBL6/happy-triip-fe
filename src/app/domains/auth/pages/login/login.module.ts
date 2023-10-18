import { LoginComponent } from "src/app/domains/auth/pages/login/login.component";
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
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutesModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    EmptyLayoutModule,
  ],
  providers: [MessageService],
  exports: [LoginComponent],
})
export class LoginModule {}
