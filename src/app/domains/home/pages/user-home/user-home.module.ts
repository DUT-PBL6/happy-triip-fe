import { NgModule } from "@angular/core";
import { UserHomeComponent } from "./user-home.component";
import { CommonModule } from "@angular/common";
import { BookingSearchFormModule } from "../../../../share/components/booking-search-form/booking-search-form.module";
import { PopularRoutesModule } from "../../components/popular-routes/popular-routes.module";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    BookingSearchFormModule,
    PopularRoutesModule,
    ButtonModule,
    CarouselModule,
    FooterModule,
    CopyrightModule,
  ],
  exports: [UserHomeComponent],
})
export class UserHomeModule {}
