import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { PoiStationsComponent } from "./poi-stations.component";
import { StationFormModule } from "../../components/station/station-form/station-form.module";
import { StationListBoxModule } from "../../components/station/station-listbox/station-listbox.module";

@NgModule({
  declarations: [PoiStationsComponent],
  imports: [CommonModule, ListboxModule, ButtonModule, StationFormModule, StationListBoxModule],
  exports: [PoiStationsComponent],
})
export class PoiStationsModule {}
