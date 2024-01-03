import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Route, RouteDto } from "_api";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateRoute, GetAllPendingRoute, UpdateRoute } from "src/app/core/service/route/route.action";
import { RouteService } from "src/app/core/service/route/route.service";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { UpdateRouteResponse } from "../../types/update-route-response";
import cacheService from "src/lib/cache-service";
import { RouteState } from "src/app/core/service/route/route.state";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { StationState } from "src/app/core/service/station/station.state";
import { GetAllStation } from "src/app/core/service/station/station.action";
import { PendingRouteDetailComponent } from "../../components/route/pending-route-detail/pending-route-detail.component";
import { DATE_PICKER_FORMAT } from "src/app/share/constants";

@Component({
  selector: "app-route-management",
  templateUrl: "./route-management.component.html",
  styleUrls: ["./route-management.component.scss"],
})
export class RouteManagementComponent extends BaseDestroyable implements OnInit {
  public currentRoute: Route | UpdateRouteResponse;
  public isUpdateMode = false;
  public isSelectedRouteChangeTrigged = 0;
  public isFetchDone = true;
  public isEmployee = false;
  public ref: DynamicDialogRef | undefined;
  // public readonly datePickerFormat = DATE_PICKER_FORMAT;
  // public statusOptions : string[] = ['PENDING', 'ACCEPTED', 'DENIED'];
  // public selectedStatus: string = '';
  // public pendingRoutes :Route[] = [];

  
  @Select(RouteState.getAllPendingRoute) public pendingRoutes$: Observable<Route[]>;

  constructor(
    private routeService: RouteService,
    private toastService: ToastService,
    private store: Store,
    public dialogService: DialogService
  ) {
    super();
  }
 

  public onPendingRouteClick(route: Route): void {
    this.routeService
      .getRouteById$(route.id)
      .pipe(
        takeUntil(this.destroy$),
        map((routeDetail) => ({
          ...routeDetail,
          fromAt: route.fromAt,
          toAt: route.toAt,
          partner: route.partner,
        }))
      )
      .subscribe((routeDetails) => {
        this.ref = this.dialogService.open(PendingRouteDetailComponent, {
          data: { routeDetails },
          header: "Pending route details",
          width: "70%",
          contentStyle: { overflow: "auto" },
        });
      });
  }


  // public onStatusChange():void{
  //   const query = { status: this.selectedStatus };
  //   console.log(query);
  //   console.log(this.selectedStatus);
  //   this.routeService.getFilterRoutes$(query)
  //   .pipe(takeUntil(this.destroy$))
  //   .subscribe({
  //     next: (response) => {
  //      console.log(response);
  //      this.pendingRoutes = response
  //     },
  //   });

  // }

  ngOnInit(): void {
    this.isEmployee = Object(cacheService.getUserInfo()).userRole === "EMPLOYEE";
    if (this.isEmployee) {
      if (this.store.selectSnapshot(RouteState.getAllPendingRoute).length === 0)
        this.store.dispatch(new GetAllPendingRoute());
      if (this.store.selectSnapshot(StationState.getAllStation).length === 0) this.store.dispatch(new GetAllStation());
    }
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
        this.isUpdateMode = false;
      },
    });
  }
}
