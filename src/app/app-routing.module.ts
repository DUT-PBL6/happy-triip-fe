import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", loadChildren: () => import("./domains/homepage/homepage.module").then((m) => m.HomepageModule) },
  { path: "auth", loadChildren: () => import("./domains/auth/auth.module").then((m) => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
