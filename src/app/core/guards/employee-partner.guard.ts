import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import cacheService from "src/lib/cache-service";

@Injectable({ providedIn: "root" })
export class EmployeePartnerGuard {
  constructor(private route: Router) {}

  public canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return (
      (cacheService.getValue("accessToken") && Object(cacheService.getUserInfo()).userRole === "EMPLOYEE") ||
      (cacheService.getValue("accessToken") && Object(cacheService.getUserInfo()).userRole === "PARTNER") ||
      this.route.createUrlTree(["/"])
    );
  }
}
