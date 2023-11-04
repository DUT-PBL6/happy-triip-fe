import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListboxModule } from "primeng/listbox";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";

import { StationFormModule } from "../../components/station-form/station-form.module";
import { StationListBoxModule } from "../../components/station-listbox/station-listbox.module";
import { PoiStationsComponent } from "./poi-stations.component";

@NgModule({
  declarations: [PoiStationsComponent],
  imports: [CommonModule, ListboxModule, ButtonModule,StationFormModule,StationListBoxModule],
  exports: [PoiStationsComponent],
})
export class PoiStationsModule {}