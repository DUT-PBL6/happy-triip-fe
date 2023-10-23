import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HowToBookComponent } from "./how-to-book.component";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";

@NgModule({
  declarations: [HowToBookComponent],
  imports: [CommonModule, EmptyLayoutModule, FooterModule, CopyrightModule],
  exports: [HowToBookComponent],
})
export class HowToBookModule {}
