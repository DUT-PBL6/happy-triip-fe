import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "src/app/share/components/header/header.module";
import { EmptyLayoutComponent } from "./empty-layout.component";

@NgModule({
  declarations: [EmptyLayoutComponent],
  imports: [CommonModule, HeaderModule],
  exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
