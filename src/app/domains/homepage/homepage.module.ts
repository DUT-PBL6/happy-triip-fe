import { NgModule } from "@angular/core";
import { HomepagePageModule } from "./pages/homepage-page/homepage-page.module";
import { HomepageRoutesModule } from "./homepage.route";

@NgModule({
  imports: [HomepageRoutesModule, HomepagePageModule],
})
export class HomepageModule {}
