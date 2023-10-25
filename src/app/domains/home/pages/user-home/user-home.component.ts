import { Component } from "@angular/core";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent {
  public latestNews = [
    {
      id: "1",
      title: "Hello summer with Vietnam Travel Bus! Discount 20% off for the new routes",
      date: "30 July 2023",
    },
    {
      id: "2",
      title: "Vietnam Travel Bus becomes one of the biggest bus companies in Asia!",
      date: "12 March 2023",
    },
    {
      id: "3",
      title: "Vietnam Travel Bus is opening a new route from Sa Pa to Hoi An",
      date: "14 February 2023",
    },
  ];

  public getNumberRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }
}
