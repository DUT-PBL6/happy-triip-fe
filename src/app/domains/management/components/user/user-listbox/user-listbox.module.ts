import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListboxComponent } from "./user-listbox.component";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserListboxComponent],
  imports: [CommonModule, ListboxModule, ButtonModule, FormsModule],
  exports: [UserListboxComponent],
})
export class UserListboxModule {}
