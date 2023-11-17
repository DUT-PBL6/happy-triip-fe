import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Partner } from "_api";

@Component({
  selector: "app-pending-partner",
  templateUrl: "./pending-partner.component.html",
  styleUrls: ["./pending-partner.component.scss"],
})
export class PendingPartnerComponent implements OnInit {
  @Input("partner") public partner: Partner;
  @Input("stt") public stt;
  constructor() {}

  ngOnInit() {
    console.log(this.partner);
  }

  ngOnChanges() {
    this.stt++;
  }
}
