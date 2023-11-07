import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Route, RouteDto } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateRoute, UpdateRoute } from "src/app/core/service/route/route.action";
import { RouteService } from "src/app/core/service/route/route.service";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-route-management",
  templateUrl: "./route-management.component.html",
  styleUrls: ["./route-management.component.scss"],
})
export class RouteManagementComponent extends BaseDestroyable {
  public currentRoute: Route;
  public isRouteFormVisible = false;
  public isUpdateMode = false;

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
    if (!route?.id) {
      this.currentRoute = route;
      return;
    }
    this.routeService.getRouteById$(route.id).subscribe((retrievedRoute) => {
      this.currentRoute = retrievedRoute;
    });
  }

  public onUpdateModeChange(isUpdateMode: boolean): void {
    this.isUpdateMode = isUpdateMode;
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
