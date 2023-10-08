import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularRoutesComponent } from "./popular-routes.component";
import { DragScrollModule } from "ngx-drag-scroll";
@NgModule({
  declarations: [PopularRoutesComponent],
  imports: [CommonModule, DragScrollModule],
  exports: [PopularRoutesComponent],
})
export class PopularRoutesModule {}
