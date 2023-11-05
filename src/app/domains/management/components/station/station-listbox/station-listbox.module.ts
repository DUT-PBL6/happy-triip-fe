import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ListboxModule } from "primeng/listbox";
import { StationListboxComponent } from "./station-listbox.component";

@NgModule({
  declarations: [StationListboxComponent],
  imports: [CommonModule, ListboxModule, ButtonModule, FormsModule],
  exports: [StationListboxComponent],
})
export class StationListBoxModule {}
