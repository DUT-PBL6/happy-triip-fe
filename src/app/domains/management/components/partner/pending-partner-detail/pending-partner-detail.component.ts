import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Partner } from "_api";
import { ConfirmationService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { AcceptPartner, DenyPartner, GetAllPartner } from "src/app/core/service/partner/partner.action";
import { PartnerService } from "src/app/core/service/partner/partner.service";
import { ToastService } from "src/app/core/service/toast/toast.service";

@Component({
  selector: "app-pending-partner-detail",
  templateUrl: "./pending-partner-detail.component.html",
  styleUrls: ["./pending-partner-detail.component.scss"],
})
export class PendingPartnerDetailComponent extends BaseDestroyable implements OnInit {
  public isPending = false;
  public partner: Partner;
  constructor(
    private config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private partnerService: PartnerService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.partner = this.config.data["partnerDetails"];
    this.partner.status === "PENDING" ? (this.isPending = true) : (this.isPending = false);
  }
  public handlePartnerAction(event: Event, isAccept: boolean): void {
    const confirmationMessage = isAccept
      ? "Are you sure that you want to accept this partner?"
      : "Are you sure that you want to deny this partner?";
    const successMessage = isAccept ? "This partner is accepted successfully!" : "This partner is denied successfully!";

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: confirmationMessage,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        const partnerAction$ = isAccept
          ? this.partnerService.acceptPartner$(this.partner.id)
          : this.partnerService.denyPartner$(this.partner.id);

        partnerAction$.pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            this.store.dispatch(isAccept ? new AcceptPartner(response.id) : new DenyPartner(response.id));
            this.store.dispatch(new GetAllPartner());
            this.toastService.showSuccess("Success", successMessage);
            this.ref.close();
          },
        });
      },
    });
  }
}
