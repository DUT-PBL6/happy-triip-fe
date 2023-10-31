import { Component } from "@angular/core";

@Component({
  selector: "app-baggage-regulations",
  templateUrl: "./baggage-regulations.component.html",
  styleUrls: ["./baggage-regulations.component.scss"],
})
export class BaggageRegulationsComponent {
  public baggageRegulations = [
    {
      id: "1",
      image: "business",
      description:
        " Each passenger is entitled to one free carry-on luggage with a weight not exceeding 20kg and dimensions smaller than 50x30x80cm (Width, Depth, Height).",
    },
    {
      id: "2",
      image: "additional-fee",
      description:
        "Additional luggage will incur a fee of 50,000 VND per piece, and only one additional piece is allowed (total of 2 pieces).",
    },
    {
      id: "3",
      image: "phone-callback",
      description: "If you lose your luggage, please contact us immediately at the hotline number 1900252565.",
    },
    {
      id: "4",
      image: "baby-stroller",
      description:
        "In addition to wheelchair accessibility, we also provide free stroller transportation for infants, but the stroller must be foldable.",
    },
    {
      id: "5",
      image: "wheelchair",
      description:
        "Wheelchairs for disabled passengers: TravelBus provides free transportation for wheelchairs, but please ensure the wheelchair is foldable for easy arrangement.",
    },
    {
      id: "6",
      image: "bicycle",
      description:
        "Regarding bicycles, only large buses can accommodate bicycle transportation (we will inform you during the booking process), and an additional fee will apply.",
    },
    {
      id: "7",
      image: "pet",
      description:
        "We do not transport pets or animals. However, if it is a guide dog for the visually impaired, we will provide free assistance.",
    },
    {
      id: "8",
      image: "question",
      description:
        "We are available to support you 24/7 through various contact channels, including <a> Facebook</a>, hotline 1900252565, or +84812995715 (for international customers), as well as the WhatsApp number of the general operations representative: +84812995715.",
    },
  ];
}
