import { LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
  public username = cacheService.getUserInfo().username;

  constructor(
    private router: Router,
    private url: LocationStrategy
  ) {}

  ngOnInit(): void {
    console.log(Object(cacheService.getUserInfo()));

    this.initProfileMenu();
    this.tieredItems = [
      {
        label: "Home",
        routerLink: "/home",
      },
      {
        label: "About Us",
        routerLink: "/about-us",
      },
      {
        label: "Our Services",
        items: [
          {
            label: "Private Services",
            items: [
              {
                label: "Danang Airport Pick & Drop",
                routerLink: "/services/private-services/airport-pick-up",
              },
              {
                label: "Travel Car For Rent",
                routerLink: "/services/private-services/rent-car",
              },
              {
                label: "Professional Guide Hiring Service",
                routerLink: "/services/private-services/guide",
              },
              {
                label: "Door To Door Bus",
                routerLink: "/services/private-services/door-to-door-bus",
              },
              {
                label: "Sight-seeing Tickets",
                routerLink: "/services/private-services/ticket",
              },
            ],
          },
          {
            label: "Service Quality",
            routerLink: "/services/service-quality",
          },
          {
            label: "How To Book",
            routerLink: "/services/how-to-book",
          },
          {
            label: "Policy",
            items: [
              {
                label: "Booking Policy",
                routerLink: "/services/policy/booking-policy",
              },
              {
                label: "Customer's Rights",
                routerLink: "/services/policy/customer-rights",
              },
              {
                label: "Privacy Policy",
                routerLink: "/services/policy/privacy-policy",
              },
              {
                label: "Baggage Regulations",
                routerLink: "/services/policy/baggage-regulations",
              },
              {
                label: "Frequency Asked Questions",
                routerLink: "/services/policy/questions",
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
            routerLink: "/contact/information",
          },
          {
            label: "Reseller Partner Program",
            routerLink: "/contact/reseller-program",
          },
          {
            label: "Transport Operators",
            routerLink: "/contact/transport-operators",
          },
        ],
      },
      {
        label: "Career",
        routerLink: "/career",
      },
      { separator: true },
      {
        label: "Manage Booking",
        routerLink: "/booking/manage",
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
      { separator: true },
      {
        label: "Sign up",
        items: [
          {
            label: "Sign up as Passenger",
            routerLink: "/auth/signup",
            queryParams: { userRole: "passenger" },
          },
          {
            label: "Sign up as Partner",
            routerLink: "/auth/signup",
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
