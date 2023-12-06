import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteOverviewComponent } from "./route-overview.component";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [RouteOverviewComponent],
  imports: [CommonModule, TranslateModule, TableModule],
  exports: [RouteOverviewComponent],
})
export class RouteOverviewModule {}
