import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Route } from "_api";
import { Observable } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetAllRoute } from "src/app/core/service/route/route.action";
import { RouteService } from "src/app/core/service/route/route.service";
import { RouteState } from "src/app/core/service/route/route.state";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent extends BaseDestroyable implements OnInit {
  @Select(RouteState.getAllRoute) public routes$: Observable<Route[]>;

  constructor(
    private store: Store,
    private routeService: RouteService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.store.selectSnapshot(RouteState.getAllRoute).length === 0) this.store.dispatch(new GetAllRoute());
    this.routes$.subscribe((routes) => console.log(routes));
  }
}
