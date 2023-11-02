import { Component } from "@angular/core";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent {
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
        "The price of sightseeing tickets includes the tour guide and transportation costs (for daily tour bookings).",
    },
    {
      id: "2",
      image: "dollar",
      description:
        "The price of sightseeing tickets does not include tips for the tour guide and driver, the cost of hiring a tour guide and a car (for daily ticket purchases - Travel Ticket), and VAT.",
    },
    {
      id: "3",
      image: "clock",
      description: "The working hours of our tour booking center are from 06:00 AM to 07:00 PM daily.",
    },
    {
      id: "4",
      image: "union",
      description:
        "Customers are required to make 100% payment for ticket purchases at least 3 days in advance during the low season and 10 days in advance during the high season. Cancellations and free reduction of ticket quantity can be made 24 hours in advance.",
    },
  ];
}
