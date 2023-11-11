import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PendingRouteDetailComponent } from "./pending-route-detail.component";
import { TableModule } from "primeng/table";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "primeng/button";
import { ConfirmationService } from "primeng/api";
import { ConfirmPopupModule } from "primeng/confirmpopup";

@NgModule({
  declarations: [PendingRouteDetailComponent],
  imports: [CommonModule, TableModule, TranslateModule, ButtonModule, ConfirmPopupModule],
  exports: [PendingRouteDetailComponent],
  providers: [ConfirmationService],
})
export class PendingRouteDetailModule {}
