import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchRouteComponent } from "./search-route.component";
import { BookingSearchFormModule } from "src/app/share/components/booking-search-form/booking-search-form.module";
import { ResultCardModule } from "../../components/result-card/result-card.module";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { PopularRoutesModule } from "src/app/domains/home/components/popular-routes/popular-routes.module";

@NgModule({
  declarations: [SearchRouteComponent],
  imports: [
    CommonModule,
    BookingSearchFormModule,
    ResultCardModule,
    FooterModule,
    CopyrightModule,
    PopularRoutesModule,
  ],
  exports: [SearchRouteComponent],
})
export class SearchRouteModule {}
