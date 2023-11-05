import { LocationStrategy } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-policy",
  templateUrl: "./policy.component.html",
  styleUrls: ["./policy.component.scss"],
})
export class PolicyLayoutComponent {
  constructor(private url: LocationStrategy) {}
}
