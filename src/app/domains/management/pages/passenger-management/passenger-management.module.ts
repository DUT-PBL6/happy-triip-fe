import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerManagementComponent } from "./passenger-management.component";
import { PassengerFormModule } from "../../components/passenger/passenger-form/passenger-form.module";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PassengerManagementComponent],
  imports: [CommonModule, PassengerFormModule, InputTextModule, ButtonModule, FormsModule],
  exports: [PassengerManagementComponent],
})
export class PassengerManagementModule {}
