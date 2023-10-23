import { LocationStrategy } from "@angular/common";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-policy",
  templateUrl: "./policy.component.html",
  styleUrls: ["./policy.component.scss"],
})
export class PolicyLayoutComponent implements OnChanges, OnInit {
  constructor(private url: LocationStrategy) {}

  ngOnInit(): void {
    console.log(this.url.path());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.url.path());
  }
}
