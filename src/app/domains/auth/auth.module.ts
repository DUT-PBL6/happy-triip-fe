import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutesModule } from "./auth.route";
import { LoginModule } from "./pages/login/login.module";
import { RegisterComponent } from "./pages/register/register.component";
import { RegisterModule } from "./pages/register/register.module";
import { AuthLayoutComponent } from "./layouts/auth/auth.component";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, AuthRoutesModule, LoginModule, RegisterModule, EmptyLayoutModule],
  exports: [AuthLayoutComponent],
})
export class AuthModule {}
