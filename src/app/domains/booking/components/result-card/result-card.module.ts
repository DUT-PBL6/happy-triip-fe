import { NgModule } from "@angular/core";
import { ResultCardComponent } from "./result-card.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CarouselModule } from "primeng/carousel";
import { ImageModule } from "primeng/image";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ResultCardComponent],
  imports: [CommonModule, ButtonModule, TabViewModule, CarouselModule, ImageModule, TranslateModule],
  exports: [ResultCardComponent],
})
export class ResultCardModule {}
