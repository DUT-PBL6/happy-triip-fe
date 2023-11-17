import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Partner, PartnerDto } from "_api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, map, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetAllPartner, GetAllPendingPartner, UpdatePartner } from "src/app/core/service/partner/partner.action";
import { PartnerService } from "src/app/core/service/partner/partner.service";
import { PartnerState } from "src/app/core/service/partner/partner.state";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { PendingPartnerDetailComponent } from "../../components/partner/pending-partner-detail/pending-partner-detail.component";
import cacheService from "src/lib/cache-service";

@Component({
  selector: "app-partner-management",
  templateUrl: "./partner-management.component.html",
  styleUrls: ["./partner-management.component.scss"],
})
export class PartnerPageComponent extends BaseDestroyable implements OnInit {
  public currentPartner: Partner;
  public isPartnerFormVisible = false;
  public ref: DynamicDialogRef | undefined;
  public isEmployee = false;
  public isPartner = false;
  public searchText: string = "";
  @Select(PartnerState.getAllPartner) public Partners$: Observable<Partner[]>;
  @Select(PartnerState.getAllPendingPartner) public PendingPartners$: Observable<Partner[]>;

  constructor(
    private partnerService: PartnerService,
    private toastService: ToastService,
    private store: Store,
    private dialogService: DialogService
  ) {
    super();
  }
  public allPartners: Partner[] = [];
  public filteredPartners: Partner[] = [];

  public filterPartners(): void {
    this.filteredPartners = this.allPartners.filter(
      (partner) =>
        partner.status.toLowerCase().includes(this.searchText.toLowerCase()) ||
        partner.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  public onSearchTextChanged(): void {
    this.filterPartners();
  }
  public onPendingPartnerClick(partner: Partner): void {
    this.partnerService
      .getPartnerById$(partner.id)
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
          width: "70%",
          contentStyle: { overflow: "auto" },
        });
      });
  }
  ngOnInit(): void {
    this.isEmployee = Object(cacheService.getUserInfo()).userRole === "EMPLOYEE";
    this.isPartner = Object(cacheService.getUserInfo()).userRole === "PARTNER";
    if (this.isPartner) {
      this.partnerService
        .getPartnerProfile$()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: Partner) => {
            this.currentPartner = response;
            console.log("Current Partner:", this.currentPartner);
            // this.store.dispatch(new GetPartnerProfile());
          },
        });
    }

    if (this.isEmployee) {
      if (this.store.selectSnapshot(PartnerState.getAllPartner).length === 0) this.store.dispatch(new GetAllPartner());

      if (this.store.selectSnapshot(PartnerState.getAllPendingPartner).length === 0)
        this.store.dispatch(new GetAllPendingPartner());

      // this.PendingPartners$.pipe(takeUntil(this.destroy$)).subscribe(partners => {
      this.Partners$.pipe(takeUntil(this.destroy$)).subscribe((partners) => {
        this.allPartners = partners;
        this.filteredPartners = partners;
      });
    }
  }

  public handlePartnerForm(partner: PartnerDto): void {
    this.partnerService
      .updatePartner$(partner)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.toastService.showSuccess("Success", "Profile updated successfully");
          console.log("handle", response);
          this.store.dispatch(new UpdatePartner(response));
        },
      });
  }
}
