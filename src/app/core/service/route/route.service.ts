import { RouteDto } from "./../../../../../_api";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PopularRoute } from "src/app/domains/home/types/popular-route.type";
import { RouteInfo } from "src/app/domains/booking/types/route-info.type";
import { Route } from "_api";
import { ApiService } from "../base-api/api.service";

@Injectable({ providedIn: "root" })
export class RouteService {
  constructor(
    protected apiService: ApiService,
    protected http: HttpClient
  ) {}

  public getPopularRoutes$(): Observable<PopularRoute[]> {
    // TODO: Replace by calling real API
    return this.http.get<PopularRoute[]>("https://mocki.io/v1/be8ed4c5-de67-4ef7-8c64-6ade52a01d0b");
  }

  public getRoutesByInfo$(routeInfo: RouteInfo): Observable<Route[]> {
    // TODO: Replace by calling real API
    return this.http.get<Route[]>("https://mocki.io/v1/171e83d4-66b1-4d73-b4eb-35eea3fd263d");
  }

  public getRoutes$(): Observable<Route[]> {
    return this.apiService.api.routeGetAllRoutesOfPartner();
  }

  public getPendingRoutes$(): Observable<Route[]> {
    return this.apiService.api.routeGetRoutesPending();
  }

  public getRouteById$(id: number): Observable<Route> {
    return this.apiService.api.routeGetRouteById(id);
  }

  public createRoute$(routeDto: RouteDto): Observable<Route> {
    return this.apiService.api.routeCreate(routeDto);
  }

  public updateRoute$(id: number, routeDto: RouteDto): Observable<Route> {
    return this.apiService.api.routeUpdateById(id, routeDto);
  }
}
