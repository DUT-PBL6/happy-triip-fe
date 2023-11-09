import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Route, RouteDto, RouteResponse } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateRoute, UpdateRoute } from "src/app/core/service/route/route.action";
import { RouteService } from "src/app/core/service/route/route.service";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { UpdateRouteResponse } from "../../types/update-route-response";

@Component({
  selector: "app-route-management",
  templateUrl: "./route-management.component.html",
  styleUrls: ["./route-management.component.scss"],
})
export class RouteManagementComponent extends BaseDestroyable {
  public currentRoute: Route | UpdateRouteResponse;
  public isRouteFormVisible = false;
  public isUpdateMode = false;
  public isSelectedRouteChangeTrigged = 0;
  public isFetchDone = true;

  constructor(
    private routeService: RouteService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  public cancelRouteForm(isCancel: boolean): void {
    this.isRouteFormVisible = !isCancel;
  }

  public onSelectedRouteChange(route: Route): void {
    this.isFetchDone = false;

    if (!route?.id) {
      this.currentRoute = route;
      this.isFetchDone = true;
      return;
    }
    this.routeService.getRouteById$(route.id).subscribe((retrievedRoute: Route) => {
      this.currentRoute = {
        ...retrievedRoute,
        routeSchedules: retrievedRoute.routeSchedules.map((schedule) => new Date(schedule.date)),
        departAt: new Date(parseTimeStringToDate(retrievedRoute.departAt)),
        arriveAt: new Date(parseTimeStringToDate(retrievedRoute.arriveAt)),
        pickUpPoints: retrievedRoute.pickUpPoints.map((point) => ({
          address: point.address,
          time: new Date(parseTimeStringToDate(point.time)),
        })),
        dropOffPoints: retrievedRoute.dropOffPoints.map((point) => ({
          address: point.address,
          time: new Date(parseTimeStringToDate(point.time)),
        })),
      };
      this.isFetchDone = true;
    });
  }

  public onUpdateModeChange(isUpdateMode: boolean): void {
    this.isUpdateMode = isUpdateMode;
    this.isSelectedRouteChangeTrigged++;
  }

  public onFormVisibleChange(isVisible: boolean): void {
    this.isRouteFormVisible = isVisible;
  }

  public handleRouteForm(route: RouteDto): void {
    const service$: Observable<Route> = this.isUpdateMode
      ? this.routeService.updateRoute$(this.currentRoute.id, route)
      : this.routeService.createRoute$(route);

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.toastService.showSuccess(
          "Success",
          this.isUpdateMode ? "Route is updated successfully" : "Route is created successfully"
        );
        this.store.dispatch(this.isUpdateMode ? new UpdateRoute(response) : new CreateRoute(response));
      },
    });

    this.isRouteFormVisible = false;
  }
}
