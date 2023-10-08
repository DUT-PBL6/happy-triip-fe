import { NgModule } from "@angular/core";
import { HomeRoutesModule } from "./home.route";
import { UserHomeModule } from "./pages/user-home/user-home.module";

@NgModule({
  imports: [HomeRoutesModule, UserHomeModule],
})
export class HomeModule {}
