import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Partner, PartnerDto } from "_api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import {
  GetAllPartner,
  GetAllPendingPartner,
  GetCurrentPartner,
  UpdatePartner,
} from "src/app/core/service/partner/partner.action";
import { PartnerService } from "src/app/core/service/partner/partner.service";
import { PartnerState } from "src/app/core/service/partner/partner.state";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { PendingPartnerDetailComponent } from "../../components/partner/pending-partner-detail/pending-partner-detail.component";
import cacheService from "src/lib/cache-service";
import { Table } from "primeng/table";
import { TranslateService } from "@ngx-translate/core";

enum PartnerStatus {
  Incomplete_data = "INCOMPLETE_DATA",
  Pending = "PENDING",
  Denied = "DENIED",
  Accepted = "ACCEPTED",
}

@Component({
  selector: "app-partner-management",
  templateUrl: "./partner-management.component.html",
  styleUrls: ["./partner-management.component.scss"],
})
export class PartnerPageComponent extends BaseDestroyable implements OnInit {
  public currentPartner: Partner;
  public ref: DynamicDialogRef | undefined;
  public isEmployee = false;
  public isPartner = false;
  public statuses!: any[];
  public selectedPartner: Partner;
  @Select(PartnerState.getAllPartner) public partners$: Observable<Partner[]>;
  @Select(PartnerState.getCurrentPartner) public currentPartner$: Observable<Partner>;

  constructor(
    private partnerService: PartnerService,
    private toastService: ToastService,
    private store: Store,
    private dialogService: DialogService,
    private translate: TranslateService
  ) {
    super();
  }

  ngOnInit(): void {
    this.isEmployee = Object(cacheService.getUserInfo()).userRole === "EMPLOYEE";
    this.isPartner = Object(cacheService.getUserInfo()).userRole === "PARTNER";
    this.statuses = Object.values(PartnerStatus).map((value) => ({
      label: this.translate.instant(`share.partnerStatus.${value}`),
      value,
    }));

    if (this.isPartner) {
      if (this.store.selectSnapshot(PartnerState.getCurrentPartner) == undefined)
        this.store.dispatch(new GetCurrentPartner());
      this.currentPartner$.pipe(takeUntil(this.destroy$)).subscribe((partner) => (this.currentPartner = partner));
      return;
    }

    if (this.isEmployee) {
      if (this.store.selectSnapshot(PartnerState.getAllPartner).length === 0) this.store.dispatch(new GetAllPartner());
    }
  }

  public onRowSelect(event): void {
    this.partnerService
      .getPartnerById$(event.data.id)
      .pipe(
        takeUntil(this.destroy$),
        map((partnerDetail) => ({
          ...partnerDetail,
        }))
      )
      .subscribe((partnerDetails) => {
        this.ref = this.dialogService.open(PendingPartnerDetailComponent, {
          data: { partnerDetails },
          header: "Partner details",
          width: "50%",
          contentStyle: { overflow: "auto" },
        });
      });
  }

  public handlePartnerForm(partner: PartnerDto): void {
    this.partnerService
      .updatePartner$(partner)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.toastService.showSuccess("Success", "Profile updated successfully!");
          this.store.dispatch(new UpdatePartner(response));
        },
      });
  }

  public getSeverity(status: string): string {
    switch (status) {
      case "DENIED":
        return "danger";

      case "ACCEPTED":
        return "success";

      case "INCOMPLETE_DATA":
        return "info";

      case "PENDING":
        return "warning";
    }
  }
}
