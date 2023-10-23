import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceQualityComponent } from "./service-quality.component";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";

@NgModule({
  declarations: [ServiceQualityComponent],
  imports: [CommonModule, EmptyLayoutModule, FooterModule, CopyrightModule],
  exports: [ServiceQualityComponent],
})
export class ServiceQualityModule {}
