import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public tieredItems: MenuItem[] = [];

  ngOnInit(): void {
    this.tieredItems = [
      {
        label: "Home",
      },
      {
        label: "About Us",
      },
      {
        label: "Our Services",
        items: [
          {
            label: "Private Services",
            items: [
              {
                label: "Danang Airport Pick & Drop",
              },
              {
                label: "Travel Car For Rent",
              },
              {
                label: "Professional Guide Hiring Service",
              },
              {
                label: "Door To Door Bus",
              },
              {
                label: "Sight-seeing Tickets",
              },
            ],
          },
          {
            label: "Service Quality",
          },
          {
            label: "How To Book",
          },
          {
            label: "Policy",
            items: [
              {
                label: "Booking Policy",
              },
              {
                label: "Customer's Rights",
              },
              {
                label: "Privacy Policy",
              },
              {
                label: "Baggage Regulations",
              },
              {
                label: "Frequency Asked Questions",
              },
            ],
          },
        ],
      },
      {
        label: "Contact",
        items: [
          {
            label: "Contact Information",
          },
          {
            label: "Reseller Partner Program",
          },
          {
            label: "Transport Operators",
          },
        ],
      },
      {
        label: "Career",
      },
      { separator: true },
      {
        label: "Manage Booking",
      },
    ];
  }
}
