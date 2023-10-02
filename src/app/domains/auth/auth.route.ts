import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { AuthLayoutComponent } from "./layouts/auth/auth.component";

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    // canActivate: [AuthGuard], TODO
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutesModule {}
