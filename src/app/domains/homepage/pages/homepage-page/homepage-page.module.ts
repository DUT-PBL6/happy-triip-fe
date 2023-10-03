import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomepagePageComponent } from "./homepage-page.component";
import { SidebarModule } from "src/app/share/components/sidebar/sidebar.module";

@NgModule({
  declarations: [HomepagePageComponent],
  imports: [RouterModule, SidebarModule],
  exports: [HomepagePageComponent],
})
export class HomepagePageModule {}
