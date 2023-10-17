import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileSettingsComponent } from "./profile-settings.component";
import { ListboxModule } from "primeng/listbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { UserFormModule } from "../../components/user-form/user-form.module";

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    ListboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    UserFormModule,
  ],
  exports: [ProfileSettingsComponent],
})
export class ProfileSettingsModule {}
