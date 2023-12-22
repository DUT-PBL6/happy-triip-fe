import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsPageComponent } from "./news-page.component";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { NewsRoutesModule } from "../../news.route";

@NgModule({
  imports: [CommonModule, ButtonModule, CarouselModule, NewsRoutesModule],
  declarations: [NewsPageComponent],
  exports: [NewsPageComponent],
})
export class NewsPageModule {}
