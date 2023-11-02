import { Component } from "@angular/core";

@Component({
  selector: "app-guide",
  templateUrl: "./guide.component.html",
  styleUrls: ["./guide.component.scss"],
})
export class GuideComponent {
  public listTags = [
    { id: "1", name: "airport" },
    { id: "2", name: "tourguide" },
    { id: "3", name: "Hoi An" },
    { id: "4", name: "Ha Noi" },
    { id: "5", name: "Da Nang" },
    { id: "6", name: "Travelbus" },
    { id: "7", name: "Hue" },
    { id: "8", name: "Vietnam" },
  ];
  public listRegulations = [
    {
      id: "1",
      image: "bed",
      description:
        "The rental price does not include transportation expenses (if the group is picked up from a distant location) and the guide's accommodation and meals (the guide will cover these expenses separately at 600,000 VND per day or $30 per day for international guests).",
    },
    {
      id: "2",
      image: "dollar",
      description:
        "The rental price does not include gratuities for the guide and driver. Tipping is not mandatory in Vietnam, but guides would appreciate it if you choose to tip them for their services.",
    },
    {
      id: "3",
      image: "clock",
      description:
        "The working hours of the guide typically start from 06:00 AM to 07:00 PM (19:00) daily. If you require the guide to work outside of these hours, please discuss and arrange directly with them. ",
    },
    {
      id: "4",
      image: "union",
      description:
        "Customers are required to make a 50% deposit for the guide fee. For the low season, the deposit should be made at least 3 days in advance, while for the peak season, the deposit should be made at least 10 days in advance. Please note that if you cancel the contract, the deposit will be non-refundable.",
    },
  ];
}
