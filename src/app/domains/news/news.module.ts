import { NgModule } from "@angular/core";
import { NewsRoutesModule } from "./news.route";
import { NewsPageModule } from "./pages/news-page/news-page.module";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { NewsLayoutComponent } from "./layout/news.component";
import { RouterModule } from "@angular/router";
import { FooterModule } from "src/app/share/components/footer/footer.module";

@NgModule({
  declarations: [NewsLayoutComponent],
  imports: [NewsRoutesModule, NewsPageModule, FooterModule, EmptyLayoutModule, CopyrightModule, RouterModule],
  exports: [NewsLayoutComponent],
})
export class NewsModule {}
