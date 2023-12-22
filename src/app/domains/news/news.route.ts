import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsPageComponent } from "./pages/news-page/news-page.component";
import { NewsLayoutComponent } from "./layout/news.component";

const routes: Routes = [
  {
    path: "",
    component: NewsLayoutComponent,
    children: [{ path: "", component: NewsPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutesModule {}
