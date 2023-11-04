import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransportListboxComponent } from "./transport-listbox.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ListboxModule } from "primeng/listbox";

@NgModule({
  declarations: [TransportListboxComponent],
  imports: [CommonModule, ListboxModule, ButtonModule, FormsModule],
  exports: [TransportListboxComponent],
})
export class TransportListboxModule {}
