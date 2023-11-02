import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AirportPickUpComponent } from "./airport-pick-up.component";
import { CarouselModule } from "primeng/carousel";
@NgModule({
  declarations: [AirportPickUpComponent],
  imports: [CommonModule,CarouselModule],
  exports: [AirportPickUpComponent],
})
export class AirportPickUpModule {}
