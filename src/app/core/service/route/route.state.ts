import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Route } from "_api";
import { RouteService } from "./route.service";
import { Observable, tap } from "rxjs";
import { CreateRoute, GetAllRoute, UpdateRoute } from "./route.action";

interface IRouteState {
  routes: Route[];
}

@State<IRouteState>({
  name: "route",
  defaults: {
    routes: [],
  },
})
@Injectable()
export class RouteState {
  @Selector()
  public static getAllRoute(state: IRouteState): Route[] {
    return state.routes;
  }

  constructor(private routeService: RouteService) {}

  @Action(GetAllRoute)
  public getAllRoute$(ctx: StateContext<IRouteState>): Observable<Route[]> {
    ctx.patchState({ routes: [] });
    return this.routeService.getRoutes$().pipe(
      tap({
        next: (routes) => ctx.patchState({ routes }),
      })
    );
  }

  @Action(CreateRoute)
  public createRoute$(ctx: StateContext<IRouteState>, action: CreateRoute): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      routes: [...state.routes, action.route],
    });
  }

  @Action(UpdateRoute)
  public updateRoute$(ctx: StateContext<IRouteState>, action: UpdateRoute): void {
    const state = ctx.getState();
    const updatedRoutes = state.routes.map((route) => {
      if (route.id === action.route.id) return action.route;
      return route;
    });
    ctx.setState({
      ...state,
      routes: updatedRoutes,
    });
  }
}
