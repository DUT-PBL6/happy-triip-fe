import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileSettingsComponent } from "./profile-settings.component";
import { ListboxModule } from "primeng/listbox";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { UserFormModule } from "../../components/user-form/user-form.module";
import { UserListboxModule } from "../../components/user-listbox/user-listbox.module";

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [CommonModule, ListboxModule, FormsModule, ButtonModule, UserFormModule, UserListboxModule],
  exports: [ProfileSettingsComponent],
})
export class ProfileSettingsModule {}
