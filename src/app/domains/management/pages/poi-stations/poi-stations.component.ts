import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Station, StationDto, Transport, TransportDto } from "_api";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { CreateStation, DeleteStation, UpdateStation } from "src/app/core/service/station/station.action";
import { StationService } from "src/app/core/service/station/station.service";
import { ToastService } from "src/app/core/service/toast/toast.service";
import { CreateTransport, UpdateTransport } from "src/app/core/service/transport/transport.action";
import { TransportService } from "src/app/core/service/transport/transport.service";

@Component({
  selector: "app-poi-stations",
  templateUrl: "./poi-stations.component.html",
  styleUrls: ["./poi-stations.component.scss"],
})
export class PoiStationsComponent extends BaseDestroyable {
  public currentStation: Station;
  public isStationFormVisible = false;
  public isUpdateMode = false;

  constructor(
    private stationService: StationService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  public cancelStationForm(isCancel: boolean): void {
    this.isStationFormVisible = !isCancel;
  }

  // remove
  public removeStationForm(): void {
    this.stationService
      .deleteStation$(this.currentStation.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.toastService.showSuccess("Success", "Station is delete successfully");
        },
      });
    this.store.dispatch(new DeleteStation(this.currentStation.id));
    this.currentStation = undefined;
    this.isUpdateMode = false;
    this.isStationFormVisible = false;
  }

  public onSelectedStationChange(station: Station): void {
    this.currentStation = station;
  }

  public onUpdateModeChange(isUpdateMode: boolean): void {
    this.isUpdateMode = isUpdateMode;
  }

  public onFormVisibleChange(isVisible: boolean): void {
    this.isStationFormVisible = isVisible;
  }

  public handleStationForm(station: StationDto): void {
    const service$: Observable<Station> = this.isUpdateMode
      ? this.stationService.updateStation$(this.currentStation.id, station)
      : this.stationService.createStation$(station);

    service$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.toastService.showSuccess(
          "Success",
          this.isUpdateMode ? "Station is updated successfully" : "Station is created successfully"
        );
        this.store.dispatch(this.isUpdateMode ? new UpdateStation(response) : new CreateStation(response));
      },
    });

    this.isStationFormVisible = false;
  }
}
