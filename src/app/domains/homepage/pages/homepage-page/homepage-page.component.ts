import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import cacheService from "src/lib/cache-service";

@Component({
  selector: "app-homepage-page",
  templateUrl: "./homepage-page.component.html",
  styleUrls: ["./homepage-page.component.scss"],
})
export class HomepagePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = Object(cacheService.getUserInfo());

    if (!cacheService.getValue("accessToken") || user.userRole === "PASSENGER") {
      this.router.navigate([`/home`]);
      return;
    }
    this.router.navigate([`/management`]);
  }
}
