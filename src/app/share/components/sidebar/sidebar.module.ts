import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { TreeModule } from "primeng/tree";

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TreeModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
