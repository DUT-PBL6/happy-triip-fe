import { PrivateServicesLayoutComponent } from "./layouts/private-services/private-services.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesRoutesModule } from "./services.route";
import { HowToBookModule } from "./pages/how-to-book/how-to-book.module";
import { AirportPickUpModule } from "./pages/airport-pick-up/airport-pick-up.module";
import { EmptyLayoutModule } from "src/app/share/layouts/empty-layout/empty-layout.module";
import { PolicyLayoutComponent } from "./layouts/policy/policy.component";
import { BookingPolicyModule } from "./pages/booking-policy/booking-policy.module";
import { ServiceQualityModule } from "./pages/service-quality/service-quality.module";
import { FooterModule } from "src/app/share/components/footer/footer.module";
import { CopyrightModule } from "src/app/share/components/copyright/copyright.module";
import { RentCarModule } from "./pages/rent-car/rent-car.module";
import { GuideModule } from "./pages/guide/guide.module";
import { DoorToDoorBusModule } from "./pages/door-to-door-bus/door-to-door-bus.module";
import { TicketModule } from "./pages/ticket/ticket.module";
import { CustomerRightsModule } from "./pages/customer-rights/customer-rights.module";
import { BaggageRegulationsModule } from "./pages/baggage-regulations/baggage-regulations.module";
import { QuestionsModule } from "./pages/questions/questions.module";

@NgModule({
  declarations: [PolicyLayoutComponent, PrivateServicesLayoutComponent],
  imports: [
    CommonModule,
    ServicesRoutesModule,
    HowToBookModule,
    AirportPickUpModule,
    EmptyLayoutModule,
    BookingPolicyModule,
    ServiceQualityModule,
    FooterModule,
    CopyrightModule,
    RentCarModule,
    GuideModule,
    DoorToDoorBusModule,
    TicketModule,
    CustomerRightsModule,
    BaggageRegulationsModule,
    QuestionsModule,
  ],
  exports: [PolicyLayoutComponent, PrivateServicesLayoutComponent],
})
export class ServicesModule {}
