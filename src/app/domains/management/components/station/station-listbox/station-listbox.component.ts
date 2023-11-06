import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Station } from "_api";
import { Observable } from "rxjs";
import { GetAllStation } from "src/app/core/service/station/station.action";
import { StationState } from "src/app/core/service/station/station.state";

@Component({
  selector: "app-station-listbox",
  templateUrl: "./station-listbox.component.html",
  styleUrls: ["./station-listbox.component.scss"],
})
export class StationListboxComponent implements OnInit {
  public currentStation: Station;
  @Output() selectedStation = new EventEmitter<Station | undefined>();
  @Output() isUpdateMode = new EventEmitter<boolean>();
  @Output() isStationFormVisible = new EventEmitter<boolean>();
  @Select(StationState.getAllStation) public stations$: Observable<Station[]>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    if (this.store.selectSnapshot(StationState.getAllStation).length === 0) this.store.dispatch(new GetAllStation());
  }

  public handleChangeSelectedStation(): void {
    this.isStationFormVisible.emit(true);
    this.isUpdateMode.emit(true);
    this.selectedStation.emit(this.currentStation);
  }

  public handleAddStation(): void {
    this.isStationFormVisible.emit(true);
    this.isUpdateMode.emit(false);
    this.selectedStation.emit(undefined);
    this.currentStation = undefined;
  }
}
