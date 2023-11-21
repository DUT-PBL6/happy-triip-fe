import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import cacheService from "src/lib/cache-service";
import { RouteState } from "../service/route/route.state";

@Injectable({ providedIn: "root" })
export class ProceedGuard {
  constructor(
    private router: Router,
    private store: Store
  ) {}

  public canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const userInfo = Object(cacheService.getUserInfo());
    const routeByIdAndDate = this.store.selectSnapshot(RouteState.getRouteByIdAndDate);

    return (userInfo.userRole === "PASSENGER" && routeByIdAndDate !== undefined) || this.router.createUrlTree(["/"]);
  }
}
