import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionsComponent } from "./questions.component";

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
