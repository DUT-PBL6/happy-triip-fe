import { Component, Input, OnInit } from "@angular/core";
import { Route } from "_api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { getHoursDifference, getTime, parseTimeStringToDate } from "src/app/share/helpers/date.helper";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService } from "primeng/api";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { RouteService } from "src/app/core/service/route/route.service";
import { takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { Store } from "@ngxs/store";
import { AcceptRoute, DenyRoute, GetFilterRoute } from "src/app/core/service/route/route.action";

@Component({
  selector: "app-pending-route-detail",
  templateUrl: "./pending-route-detail.component.html",
  styleUrls: ["./pending-route-detail.component.scss"],
})
export class PendingRouteDetailComponent extends BaseDestroyable implements OnInit {
  public route: Route;
  public isUpdated: boolean;
  constructor(
    private config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private routeService: RouteService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.route = this.config.data["routeDetails"];
    this.route.status === "PENDING" ? (this.isUpdated = true) : (this.isUpdated = false);
    
  }

  public handleRouteAction(event: Event, isAccept: boolean): void {
    const confirmationMessage = isAccept
      ? "Are you sure that you want to accept this route?"
      : "Are you sure that you want to deny this route?";
    const successMessage = isAccept ? "This route is accepted successfully!" : "This route is denied successfully!";

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: confirmationMessage,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        const routeAction$ = isAccept
          ? this.routeService.acceptRoute$(this.route.id)
          : this.routeService.denyRoute$(this.route.id);

        routeAction$.pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            this.store.dispatch(isAccept ? new AcceptRoute(response) : new DenyRoute(response));
            this.toastService.showSuccess("Success", successMessage);
            this.store.dispatch(new GetFilterRoute({status:this.route.status}))
            this.ref.close();
          },
        });
      },
    });
  }

  public getTime(date: string): string {
    return getTime(date);
  }

  public getHoursDifference(departAt: string, arriveAt: string): string {
    return (
      this.route.ndays * 24 +
      getHoursDifference(this.parseTimeStringToDateString(departAt), this.parseTimeStringToDateString(arriveAt))
    ).toFixed(1);
  }

  public parseTimeStringToDateString(timeString: string): string {
    return parseTimeStringToDate(timeString).toString();
  }
}
