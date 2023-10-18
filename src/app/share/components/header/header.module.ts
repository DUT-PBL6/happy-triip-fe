import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { HeaderComponent } from "./header.component";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MenubarModule, TieredMenuModule, ButtonModule, MenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
