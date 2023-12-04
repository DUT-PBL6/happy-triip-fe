import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListboxModule } from "primeng/listbox";
import { ButtonModule } from "primeng/button";
import { NewsManagementComponent } from "./news-management.component";
import { NewsListboxModule } from "../../components/news/news-listbox/news-listbox.module";
import { NewsFormModule } from "../../components/news/news-form/news-form.module";

@NgModule({
  declarations: [NewsManagementComponent],
  imports: [CommonModule, ListboxModule, ButtonModule,NewsFormModule,  NewsListboxModule],
  exports: [NewsManagementComponent],
})
export class NewsManagementModule {}
