import { NgModule } from "@angular/core";
import { NewsPageModule } from "./pages/news-page/news-page.module";
import { NewsRoutesModule } from "./news.route";
@NgModule({
  imports: [NewsPageModule, NewsRoutesModule],
})
export class NewsModule {}