import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", loadChildren: () => import("./domains/homepage/homepage.module").then((m) => m.HomepageModule) },
  { path: "home", loadChildren: () => import("./domains/home/home.module").then((m) => m.HomeModule) },
  { path: "auth", loadChildren: () => import("./domains/auth/auth.module").then((m) => m.AuthModule) },
  {
    path: "management",
    loadChildren: () => import("./domains/management/management.module").then((m) => m.ManagementModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
