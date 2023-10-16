import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import cacheService from "src/lib/cache-service";

@Component({
  selector: "app-homepage-page",
  templateUrl: "./homepage-page.component.html",
  styleUrls: ["./homepage-page.component.scss"],
})
export class HomepagePageComponent extends BaseDestroyable implements OnInit {
  constructor(
    private router: Router,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    if (!cacheService.getValue("accessToken")) {
      this.router.navigate([`/home`]);
      return;
    }
    this.router.navigate([`/management`]);
  }
}
