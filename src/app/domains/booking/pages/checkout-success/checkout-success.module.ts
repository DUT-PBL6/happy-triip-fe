import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutSuccessComponent } from "./checkout-success.component";
import { TabViewModule } from "primeng/tabview";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CheckoutSuccessComponent],
  imports: [CommonModule, TranslateModule, TabViewModule],
  exports: [CheckoutSuccessComponent],
})
export class CheckoutSuccessModule {}
