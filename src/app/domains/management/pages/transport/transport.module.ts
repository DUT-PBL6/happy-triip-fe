import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransportPageComponent } from "./transport.component";
import { TransportFormModule } from "../../components/transport/transport-form/transport-form.module";
import { TransportListboxModule } from "../../components/transport/transport-listbox/transport-listbox.module";
import { NgxRerenderModule } from "ngx-rerender";

@NgModule({
  declarations: [TransportPageComponent],
  imports: [CommonModule, TransportFormModule, TransportListboxModule, NgxRerenderModule],
  exports: [TransportPageComponent],
})
export class TransportModule {}
