import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsComponent } from "./news-page.component";
import { CarouselModule } from "primeng/carousel";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, EmptyLayoutModule, FooterModule, CopyrightModule, CarouselModule],
  exports: [NewsComponent],
})
export class NewsPageModule {}