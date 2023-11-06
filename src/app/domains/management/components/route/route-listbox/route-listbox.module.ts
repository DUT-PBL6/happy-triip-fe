import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteListboxComponent } from "./route-listbox.component";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RouteListboxComponent],
  imports: [CommonModule, FormsModule, ListboxModule, ButtonModule],
  exports: [RouteListboxComponent],
})
export class RouteListboxModule {}
