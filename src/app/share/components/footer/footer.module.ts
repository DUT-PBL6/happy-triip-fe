import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule],
  exports: [FooterComponent],
})
export class FooterModule {}
