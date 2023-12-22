import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", loadChildren: () => import("./domains/homepage/homepage.module").then((m) => m.HomepageModule) },
  { path: "home", loadChildren: () => import("./domains/home/home.module").then((m) => m.HomeModule) },
  { path: "auth", loadChildren: () => import("./domains/auth/auth.module").then((m) => m.AuthModule) },
  { path: "booking", loadChildren: () => import("./domains/booking/booking.module").then((m) => m.BookingModule) },
  {
    path: "management",
    loadChildren: () => import("./domains/management/management.module").then((m) => m.ManagementModule),
    canActivate: [AuthGuard],
  },
  {
    path: "about-us",
    loadChildren: () => import("./domains/about-us/about-us.module").then((m) => m.AboutUsModule),
  },
  {
    path: "services",
    loadChildren: () => import("./domains/services/services.module").then((m) => m.ServicesModule),
  },
  {
    path: "contact",
    loadChildren: () => import("./domains/contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "news",
    loadChildren: () => import("./domains/news/news.module").then((m) => m.NewsModule),
  },
  {
    path: "**",
    redirectTo: "homepage",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
