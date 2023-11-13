import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { RouteService } from "src/app/core/service/route/route.service";
import { RouteResponse, SearchRouteDto } from "_api";
import { formatDate } from "src/app/share/helpers/date.helper";

@Component({
  selector: "app-search-route",
  templateUrl: "./search-route.component.html",
  styleUrls: ["./search-route.component.scss"],
})
export class SearchRouteComponent extends BaseDestroyable implements OnInit, OnChanges {
  public routes$: Observable<RouteResponse[]>;
  public routeInfo: SearchRouteDto;
  public isFindingRoundTrip = false;

  constructor(
    private routeService: RouteService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroy$)).subscribe((queryParamMap) => {
      this.routeInfo = {
        firstCity: queryParamMap.get("firstCity"),
        secondCity: queryParamMap.get("secondCity"),
        firstDt: formatDate(queryParamMap.get("firstDt")),
        secondDt: queryParamMap.has("secondDt") ? formatDate(queryParamMap.get("secondDt")) : undefined,
      };

      if (queryParamMap.has("secondDt")) this.isFindingRoundTrip = true;

      this.routes$ = this.routeService.searchRoutes$(this.routeInfo).pipe(
        takeUntil(this.destroy$),
        map((response) => {
          return this.isFindingRoundTrip ? response.roundTripRoutes : response.oneWayRoutes;
        })
      );
    });
  }
}
