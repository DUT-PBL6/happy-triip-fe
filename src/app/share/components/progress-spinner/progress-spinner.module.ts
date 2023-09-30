import { NgModule } from "@angular/core";
import { ProgressSpinnerComponent } from "./progress-spinner.component";
import { CommonModule } from "@angular/common";
import { ProgressSpinnerModule } from "primeng/progressspinner";

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [ProgressSpinnerComponent],
})
export class ProgressSpinnerComponentModule {}
