import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "./pages/news-page/news-page.component";

const routes: Routes = [{ path: "", component: NewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutesModule {}