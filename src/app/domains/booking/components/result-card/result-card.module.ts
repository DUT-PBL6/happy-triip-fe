import { NgModule } from "@angular/core";
import { ResultCardComponent } from "./result-card.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CarouselModule } from "primeng/carousel";
import { ImageModule } from "primeng/image";

@NgModule({
  declarations: [ResultCardComponent],
  imports: [CommonModule, ButtonModule, TabViewModule, CarouselModule, ImageModule],
  exports: [ResultCardComponent],
})
export class ResultCardModule {}
