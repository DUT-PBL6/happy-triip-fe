import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Route } from "_api";
import { RouteService } from "./route.service";
import { Observable, tap } from "rxjs";
import {
  AcceptRoute,
  CreateRoute,
  DenyRoute,
  GetAllPendingRoute,
  GetAllRoute,
  GetRouteByIdAndDate,
  UpdateRoute,
} from "./route.action";

interface IRouteState {
  routes: Route[];
  pendingRoutes: Route[];
  routeDetail: Route | undefined;
}

@State<IRouteState>({
  name: "route",
  defaults: {
    routes: [],
    pendingRoutes: [],
    routeDetail: undefined,
  },
})
@Injectable()
export class RouteState {
  @Selector()
  public static getAllRoute(state: IRouteState): Route[] {
    return state.routes;
  }

  @Selector()
  public static getAllPendingRoute(state: IRouteState): Route[] {
    return state.pendingRoutes;
  }

  @Selector()
  public static getRouteByIdAndDate(state: IRouteState): Route {
    return state.routeDetail;
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

  @Action(GetAllPendingRoute)
  public getAllPendingRoute$(ctx: StateContext<IRouteState>): Observable<Route[]> {
    ctx.patchState({ pendingRoutes: [] });
    return this.routeService.getPendingRoutes$().pipe(
      tap({
        next: (pendingRoutes) => ctx.patchState({ pendingRoutes }),
      })
    );
  }

  @Action(GetRouteByIdAndDate)
  public getRouteByIdAndDate$(ctx: StateContext<IRouteState>, action: GetRouteByIdAndDate): void {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      routeDetail: action.route,
    });
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

  @Action([AcceptRoute, DenyRoute])
  public updatePendingRoutes$(ctx: StateContext<IRouteState>, action: AcceptRoute | DenyRoute): void {
    const state = ctx.getState();
    const updatedPendingRoutes = state.pendingRoutes.filter((route) => route.id !== action.route.id);
    ctx.setState({
      ...state,
      pendingRoutes: updatedPendingRoutes,
    });
  }
}
