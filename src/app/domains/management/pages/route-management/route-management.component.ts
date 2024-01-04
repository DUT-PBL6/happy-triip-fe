import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Route, RouteDto, Station } from "_api";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateRoute, GetAllPendingRoute, GetFilterRoute, UpdateRoute } from "src/app/core/service/route/route.action";
import { RouteService } from "src/app/core/service/route/route.service";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { UpdateRouteResponse } from "../../types/update-route-response";
import cacheService from "src/lib/cache-service";
import { RouteState } from "src/app/core/service/route/route.state";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { StationState } from "src/app/core/service/station/station.state";
import { GetAllStation } from "src/app/core/service/station/station.action";
import { PendingRouteDetailComponent } from "../../components/route/pending-route-detail/pending-route-detail.component";
import { DATE_PICKER_FORMAT } from "src/app/share/constants";
import { Table } from "primeng/table";

enum RouteStatus {
  Pending = "PENDING",
  Accepted = "ACCEPTED",
  Denied = "DENIED",
}
@Component({
  selector: "app-route-management",
  templateUrl: "./route-management.component.html",
  styleUrls: ["./route-management.component.scss"],
})
export class RouteManagementComponent extends BaseDestroyable implements OnInit {
  @Select(RouteState.getFilterRoute) public routesFilter$: Observable<Route[]>;
  @Select(StationState.getAllStation) public stations$: Observable<Station[]>;
  @ViewChild("table", { static: false }) public table: Table;
  public currentRoute: Route | UpdateRouteResponse;
  public isUpdateMode = false;
  public isSelectedRouteChangeTrigged = 0;
  public isFetchDone = true;
  public statuses: any[];
  public isEmployee = false;
  public ref: DynamicDialogRef | undefined;
  public readonly datePickerFormat = DATE_PICKER_FORMAT;
  public statusOptions: string[] = ["PENDING", "ACCEPTED", "DENIED"];
  public selectedStatus = undefined;

  constructor(
    private routeService: RouteService,
    private toastService: ToastService,
    private store: Store,
    public dialogService: DialogService,
    private translate: TranslateService
  ) {
    super();
  }

  public onRowSelect(event: any): void {
    const route = event.data;
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
          data: { routeDetails, selectedStatus: this.selectedStatus },
          header: "Pending route details",
          width: "70%",
          contentStyle: { overflow: "auto" },
        });

        this.ref.onClose.subscribe((_) => {
          this.table.reset();
        });
      });
  }

  ngOnInit(): void {
    this.isEmployee = Object(cacheService.getUserInfo()).userRole === "EMPLOYEE";
    this.statuses = Object.values(RouteStatus).map((value) => ({
      label: this.translate.instant(`share.routeStatus.${value}`),
      value,
    }));

    if (this.isEmployee) {
      if (this.store.selectSnapshot(RouteState.getFilterRoute).length === 0) this.store.dispatch(new GetFilterRoute());
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

  public getTime(date: string): string {
    return getTime(date);
  }

  public getHoursDifference(route: Route, departAt: string, arriveAt: string): string {
    return (
      route.ndays * 24 +
      getHoursDifference(this.parseTimeStringToDateString(departAt), this.parseTimeStringToDateString(arriveAt))
    ).toFixed(1);
  }

  public parseTimeStringToDateString(timeString: string): string {
    return parseTimeStringToDate(timeString).toString();
  }

  public getSeverity(status: string): string {
    switch (status) {
      case "DENIED":
        return "danger";
      case "SUCCESS":
        return "success";
      case "PENDING":
        return "warning";
    }
  }
}
