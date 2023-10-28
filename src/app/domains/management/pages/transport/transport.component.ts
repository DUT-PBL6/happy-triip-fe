import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Transport, TransportDto } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { CreateTransport, UpdateTransport } from "src/app/core/service/transport/transport.action";
import { TransportService } from "src/app/core/service/transport/transport.service";

@Component({
  selector: "app-transport",
  templateUrl: "./transport.component.html",
  styleUrls: ["./transport.component.scss"],
})
export class TransportPageComponent extends BaseDestroyable {
  public currentTransport: Transport;
  public isTransportFormVisible = false;
  public isUpdateMode = false;

  constructor(
    private transportService: TransportService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  public cancelTransportForm(isCancel: boolean): void {
    this.isTransportFormVisible = !isCancel;
  }

  public onSelectedTransportChange(transport: Transport): void {
    this.currentTransport = transport;
  }

  public onUpdateModeChange(isUpdateMode: boolean): void {
    this.isUpdateMode = isUpdateMode;
  }

  public onFormVisibleChange(isVisible: boolean): void {
    this.isTransportFormVisible = isVisible;
  }

  public handleTransportForm(transport: TransportDto): void {
    const service$: Observable<Transport> = this.isUpdateMode
      ? this.transportService.updateTransport$(this.currentTransport.id, transport)
      : this.transportService.createTransport$(transport);

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.toastService.showSuccess(
          "Success",
          this.isUpdateMode ? "Transport is updated successfully" : "Transport is created successfully"
        );
        this.store.dispatch(this.isUpdateMode ? new UpdateTransport(response) : new CreateTransport(response));
      },
    });

    this.isTransportFormVisible = false;
  }
}
