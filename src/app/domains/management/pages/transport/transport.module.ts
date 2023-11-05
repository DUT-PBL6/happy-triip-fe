import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransportPageComponent } from "./transport.component";
import { TransportFormModule } from "../../components/transport-form/transport-form.module";
import { TransportListboxModule } from "../../components/transport-listbox/transport-listbox.module";

@NgModule({
  declarations: [TransportPageComponent],
  imports: [CommonModule, TransportFormModule, TransportListboxModule],
  exports: [TransportPageComponent],
})
export class TransportModule {}
