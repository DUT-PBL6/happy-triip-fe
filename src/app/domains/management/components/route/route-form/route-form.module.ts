import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteFormComponent } from "./route-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { TranslateModule } from "@ngx-translate/core";
import { CalendarModule } from "primeng/calendar";
import { InputNumberModule } from "primeng/inputnumber";

@NgModule({
  declarations: [RouteFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TranslateModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
  ],
  exports: [RouteFormComponent],
})
export class RouteFormModule {}
