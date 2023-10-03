import { Component, OnInit } from "@angular/core";
import { TreeNode } from "primeng/api";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public items: TreeNode[] = [];
  public selectedRoute!: TreeNode<any> | TreeNode<any>[];

  ngOnInit() {
    this.items = [
      {
        label: "Booking Management",
        icon: "booking",
        expanded: true,
        children: [
          {
            label: "Calendar",
            icon: "calendar",
          },
          {
            label: "Booking Confirmation",
            icon: "confirmation",
          },
        ],
      },
      {
        label: "Profile & Settings",
        icon: "user",
      },
      {
        label: "Sales Report",
        icon: "sale-report",
      },
      {
        label: "POI & Stations",
        icon: "location",
      },
      {
        label: "Transport Management",
        icon: "bus",
      },
      {
        label: "Partner Management",
        icon: "full",
      },
      {
        label: "Route Management",
        icon: "route",
      },
    ];
  }
}
