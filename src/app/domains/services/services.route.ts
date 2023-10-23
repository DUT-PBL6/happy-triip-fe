import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateServicesLayoutComponent } from "./layouts/private-services/private-services.component";
import { AirportPickUpComponent } from "./pages/airport-pick-up/airport-pick-up.component";
import { PolicyLayoutComponent } from "./layouts/policy/policy.component";
import { BookingPolicyComponent } from "./pages/booking-policy/booking-policy.component";
import { ServiceQualityComponent } from "./pages/service-quality/service-quality.component";
import { HowToBookComponent } from "./pages/how-to-book/how-to-book.component";
import { RentCarComponent } from "./pages/rent-car/rent-car.component";
import { GuideComponent } from "./pages/guide/guide.component";
import { DoorToDoorBusComponent } from "./pages/door-to-door-bus/door-to-door-bus.component";
import { TicketComponent } from "./pages/ticket/ticket.component";
import { CustomerRightsComponent } from "./pages/customer-rights/customer-rights.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { BaggageRegulationsComponent } from "./pages/baggage-regulations/baggage-regulations.component";
import { QuestionsModule } from "./pages/questions/questions.module";

const routes: Routes = [
  {
    path: "private-services",
    component: PrivateServicesLayoutComponent,
    children: [
      { path: "", redirectTo: "airport-pick-up", pathMatch: "full" },
      { path: "airport-pick-up", component: AirportPickUpComponent },
      { path: "rent-car", component: RentCarComponent },
      { path: "guide", component: GuideComponent },
      { path: "door-to-door-bus", component: DoorToDoorBusComponent },
      { path: "ticket", component: TicketComponent },
    ],
  },
  {
    path: "service-quality",
    component: ServiceQualityComponent,
  },
  {
    path: "how-to-book",
    component: HowToBookComponent,
  },
  {
    path: "policy",
    component: PolicyLayoutComponent,
    children: [
      { path: "", redirectTo: "booking-policy", pathMatch: "full" },
      { path: "booking-policy", component: BookingPolicyComponent },
      { path: "customer-rights", component: CustomerRightsComponent },
      { path: "privacy-policy", component: PrivacyPolicyComponent },
      { path: "baggage-regulations", component: BaggageRegulationsComponent },
      { path: "questions", component: QuestionsModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutesModule {}
