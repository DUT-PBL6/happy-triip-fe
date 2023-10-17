import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFormComponent } from "./user-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, DropdownModule],
  exports: [UserFormComponent],
})
export class UserFormModule {}
