import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { Route } from "src/app/core/models/route.type";
import { RouteService } from "src/app/core/service/route/route.service";
import { RouteInfo } from "../../types/route-info.type";

@Component({
  selector: "app-search-route",
  templateUrl: "./search-route.component.html",
  styleUrls: ["./search-route.component.scss"],
})
export class SearchRouteComponent extends BaseDestroyable implements OnInit {
  public routes$: Observable<Route[]>;
  public routeInfo: RouteInfo;

  constructor(
    private routeService: RouteService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroy$)).subscribe((queryParamMap) => {
      this.routeInfo = {
        departAt: new Date(queryParamMap.get("departAt")),
        arriveAt: queryParamMap.has("arriveAt") ? new Date(queryParamMap.get("arriveAt")) : undefined,
        fromAt: queryParamMap.get("fromAt"),
        toAt: queryParamMap.get("toAt"),
        passengers: parseInt(queryParamMap.get("passengers"), 10),
      };
    });

    this.routes$ = this.routeService.getRoutesByInfo$(this.routeInfo);
  }
}
