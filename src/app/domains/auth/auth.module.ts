import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutesModule } from "./auth.route";
import { LoginModule } from "./pages/login/login.module";
import { AuthLayoutComponent } from "./layouts/auth/auth.component";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, AuthRoutesModule, LoginModule, EmptyLayoutModule],
  exports: [AuthLayoutComponent],
})
export class AuthModule {}
