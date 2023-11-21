import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Route } from "_api";
import { Observable } from "rxjs";
import { RouteState } from "src/app/core/service/route/route.state";

@Component({
  selector: "app-proceed",
  templateUrl: "./proceed.component.html",
  styleUrls: ["./proceed.component.scss"],
})
export class ProceedComponent {
  @Select(RouteState.getRouteByIdAndDate) public route$: Observable<Route>;
}
