import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsPageComponent } from "./news-page.component";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { NewsRoutesModule } from "../../news.route";
import { TagModule } from "primeng/tag";

@NgModule({
  declarations: [NewsPageComponent],
  imports: [CommonModule, ButtonModule, CarouselModule, NewsRoutesModule, TagModule],
  exports: [NewsPageComponent],
})
export class NewsPageModule {}
