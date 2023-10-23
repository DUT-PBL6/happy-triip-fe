import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Transport } from "_api";
import { Observable } from "rxjs";
import { GetAllTransport } from "src/app/core/service/transport/transport.action";
import { TransportState } from "src/app/core/service/transport/transport.state";

@Component({
  selector: "app-transport-listbox",
  templateUrl: "./transport-listbox.component.html",
  styleUrls: ["./transport-listbox.component.scss"],
})
export class TransportListboxComponent implements OnInit {
  public currentTransport: Transport;
  @Output() selectedTransport = new EventEmitter<Transport | undefined>();
  @Output() isUpdateMode = new EventEmitter<boolean>();
  @Output() isTransportFormVisible = new EventEmitter<boolean>();
  @Select(TransportState.getAllTransport) public transports$: Observable<Transport[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.store.selectSnapshot(TransportState.getAllTransport).length === 0)
      this.store.dispatch(new GetAllTransport());
  }

  public handleAddTransport(): void {
    this.isTransportFormVisible.emit(true);
    this.isUpdateMode.emit(false);
    this.selectedTransport.emit(undefined);
    this.currentTransport = undefined;
  }

  public handleChangeSelectedTransport(): void {
    this.isTransportFormVisible.emit(true);
    this.isUpdateMode.emit(true);
    this.selectedTransport.emit(this.currentTransport);
  }
}
