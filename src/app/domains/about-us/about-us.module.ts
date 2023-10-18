import { NgModule } from "@angular/core";
import { AboutUsPageModule } from "./pages/about-us-page/about-us-page.module";
import { AboutUsRoutesModule } from "./about-us.route";
@NgModule({
  imports: [AboutUsPageModule, AboutUsRoutesModule],
})
export class AboutUsModule {}
