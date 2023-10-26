import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionsComponent } from "./questions.component";
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule,AccordionModule,PanelModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
