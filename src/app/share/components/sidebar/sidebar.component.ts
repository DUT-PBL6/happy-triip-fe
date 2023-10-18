import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TreeNode } from "primeng/api";
import { TreeNodeSelectEvent } from "primeng/tree";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public items: TreeNode[] = [];
  public selectedRoute!: TreeNode<any> | TreeNode<any>[];

  constructor(private router: Router) {}

  ngOnInit() {
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
    ];
  }

  public nodeSelect(event: TreeNodeSelectEvent): void {
    this.router.navigate([`management/${event.node.data}`]);
  }
}
