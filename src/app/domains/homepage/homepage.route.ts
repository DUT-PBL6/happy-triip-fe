import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepagePageComponent } from "./pages/homepage-page/homepage-page.component";

const routes: Routes = [{ path: "", component: HomepagePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutesModule {}
