import { NgModule } from "@angular/core";
import { ResultCardComponent } from "./result-card.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CarouselModule } from "primeng/carousel";
import { ImageModule } from "primeng/image";
import { TranslateModule } from "@ngx-translate/core";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [ResultCardComponent],
  imports: [CommonModule, ButtonModule, TabViewModule, CarouselModule, ImageModule, TranslateModule, TableModule],
  exports: [ResultCardComponent],
})
export class ResultCardModule {}
