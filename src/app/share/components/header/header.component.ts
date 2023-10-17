import { LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import cacheService from "src/lib/cache-service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public itemsProfileMenu: MenuItem[] = [];
  public tieredItems: MenuItem[] = [];
  public isLoggedIn = false;
  public isInAuthPage = false;

  constructor(
    private router: Router,
    private url: LocationStrategy
  ) {}

  ngOnInit(): void {
    this.initProfileMenu();
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
      { separator: true },
      {
        label: "Login",
        items: [
          {
            label: "Login as Passenger",
            routerLink: "/auth/login",
            queryParams: { userRole: "passenger" },
          },
          {
            label: "Login as Partner",
            routerLink: "/auth/login",
            queryParams: { userRole: "partner" },
          },
        ],
      },
    ];

    this.isLoggedIn = !!cacheService.getValue("accessToken");
    this.isInAuthPage = !!this.url.path().includes("auth");
  }

  private initProfileMenu(): void {
    this.itemsProfileMenu = [
      {
        label: "Log out",
        command: () => {
          cacheService.resetValue();
          this.router.navigate(["/auth"]);
        },
      },
    ];
  }
}
