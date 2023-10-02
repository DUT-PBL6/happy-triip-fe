import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutesModule } from "./auth.route";
import { LoginModule } from "./pages/login/login.module";
import { AuthLayoutComponent } from "./layouts/auth/auth.component";

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, AuthRoutesModule, LoginModule],
  exports: [AuthLayoutComponent],
})
export class AuthModule {}
