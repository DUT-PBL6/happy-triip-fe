import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TreeNode } from "primeng/api";
import { TreeNodeSelectEvent } from "primeng/tree";
import cacheService from "src/lib/cache-service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public items: TreeNode[] = [];
  public selectedRoute!: TreeNode<any> | TreeNode<any>[];
  public user = Object(cacheService.getUserInfo());

  constructor(private router: Router) {}

  ngOnInit() {
    const isEmployee = this.user.userRole === "EMPLOYEE";
    const isAdmin = this.user?.role === "ADMIN";
    const isPartner = this.user.userRole === "PARTNER";
    const isPassenger = this.user.userRole === "PASSENGER";

    this.items = [
      {
        label: "Booking Management",
        icon: "booking",
        data: "booking-management",
        expanded: true,
        children: [
          {
            label: "Calendar",
            icon: "calendar",
            data: "calendar",
          },
          {
            label: "Booking Confirmation",
            icon: "confirmation",
            data: "booking-confirmation",
          },
        ],
      },
      {
        label: "Profile & Settings",
        icon: "user",
        data: "profile-settings",
      },
      {
        label: "Sales Report",
        icon: "sale-report",
        data: "sales-report",
      },
      {
        label: "POI & Stations",
        icon: "location",
        data: "poi-stations",
      },
      {
        label: "Transport Management",
        icon: "bus",
        data: "transport",
      },
      {
        label: "Partner Management",
        icon: "full",
        data: "partner",
      },
      {
        label: "Route Management",
        icon: "route",
        data: "route",
      },
      {
        label: "News Management",
        icon: "news",
        data: "news",
      },
    ];

    if (isEmployee) {
      if (!isAdmin) {
        this.items.splice(1, 1);
        return;
      }

      this.items = this.items.filter((item) => item.data !== "transport" && item.data !== "news");
      return;
    }

    if (isPartner) {
      this.items.splice(0, 4);
      return;
    }

    if (isPassenger) {
      this.items = [
        {
          label: "Booking Management",
          icon: "booking",
          data: "booking-management",
        },
        {
          label: "Passenger Management",
          icon: "user",
          data: "passenger",
        },
      ];
    }
  }

  public nodeSelect(event: TreeNodeSelectEvent): void {
    this.router.navigate([`management/${event.node.data}`]);
  }
}
