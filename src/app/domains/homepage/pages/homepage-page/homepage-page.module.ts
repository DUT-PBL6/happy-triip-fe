import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomepagePageComponent } from "./homepage-page.component";

@NgModule({
  declarations: [HomepagePageComponent],
  imports: [RouterModule],
  exports: [HomepagePageComponent],
})
export class HomepagePageModule {}
