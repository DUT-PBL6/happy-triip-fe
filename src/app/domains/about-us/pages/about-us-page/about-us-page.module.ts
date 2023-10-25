import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsPageComponent } from "./about-us-page.component";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [CommonModule, EmptyLayoutModule, FooterModule, CopyrightModule, CarouselModule, ButtonModule],
  exports: [AboutUsPageComponent],
})
export class AboutUsPageModule {}
