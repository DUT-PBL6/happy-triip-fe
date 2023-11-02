import { Component } from "@angular/core";

@Component({
  selector: "app-private-services",
  templateUrl: "./private-services.component.html",
  styleUrls: ["./private-services.component.scss"],
})
export class PrivateServicesLayoutComponent {
  public responsiveOptions: any[] = [
    {
      breakpoint: "960px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "751px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
  ];
  public latestNews = [
    {
      id: "1",
      img: "rent-car",
      title: "Renting a car to travel in the central region",
    },
    {
      id: "2",
      img: "guide",
      title: "Professional Guide Hiring Service",
    },
    {
      id: "3",
      img: "ticket",
      title: " Sight-Seeing Tickets",
    },
    {
      id: "4",
      img: "bus",
      title: "Door To Door Bus",
    },
  ];
}
