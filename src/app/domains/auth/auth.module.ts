import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutesModule } from "./auth.route";
import { LoginModule } from "./pages/login/login.module";

@NgModule({
  imports: [CommonModule, AuthRoutesModule, LoginModule],
})
export class AuthModule {}
