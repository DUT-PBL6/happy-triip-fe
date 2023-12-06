import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsListboxComponent } from "./news-listbox.component";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ListboxModule, ButtonModule, FormsModule],
  declarations: [NewsListboxComponent],
  exports: [NewsListboxComponent],
})
export class NewsListboxModule {}
