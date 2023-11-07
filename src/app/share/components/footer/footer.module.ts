import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule, RouterModule],
  exports: [FooterComponent],
})
export class FooterModule {}
