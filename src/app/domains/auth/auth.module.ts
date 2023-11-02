import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutesModule } from "./auth.route";
import { LoginModule } from "./pages/login/login.module";
import { RegisterComponent } from './pages/register/register.component';
import { RegisterModule } from "./pages/register/register.module";

@NgModule({
  imports: [CommonModule, AuthRoutesModule, LoginModule,RegisterModule],
  declarations: [
  
  ],
})
export class AuthModule {}
