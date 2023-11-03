import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import cacheService from "src/lib/cache-service";

@Injectable({ providedIn: "root" })
export class AdminGuard {
  constructor(private route: Router) {}

  public canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = Object(cacheService.getUserInfo());

    return (
      (cacheService.getValue("accessToken") && user.userRole === "EMPLOYEE" && user.role === "ADMIN") ||
      this.route.createUrlTree(["/"])
    );
  }
}
