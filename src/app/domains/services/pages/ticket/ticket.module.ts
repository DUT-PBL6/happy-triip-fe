import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketComponent } from "./ticket.component";

@NgModule({
  declarations: [TicketComponent],
  imports: [CommonModule],
  exports: [TicketComponent],
})
export class TicketModule {}
