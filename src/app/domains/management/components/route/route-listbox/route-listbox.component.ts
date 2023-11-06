import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Route } from "_api";
import { Observable } from "rxjs";
import { GetAllRoute } from "src/app/core/service/route/route.action";
import { RouteState } from "src/app/core/service/route/route.state";

@Component({
  selector: "app-route-listbox",
  templateUrl: "./route-listbox.component.html",
  styleUrls: ["./route-listbox.component.scss"],
})
export class RouteListboxComponent implements OnInit {
  public currentRoute: Route;
  @Output() selectedRoute = new EventEmitter<Route | undefined>();
  @Output() isUpdateMode = new EventEmitter<boolean>();
  @Output() isRouteFormVisible = new EventEmitter<boolean>();
  @Select(RouteState.getAllRoute) public routes$: Observable<Route[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.store.selectSnapshot(RouteState.getAllRoute).length === 0) this.store.dispatch(new GetAllRoute());
  }

  public handleAddRoute(): void {
    this.isRouteFormVisible.emit(true);
    this.isUpdateMode.emit(false);
    this.selectedRoute.emit(undefined);
    this.currentRoute = undefined;
  }

  public handleChangeSelectedRoute(): void {
    this.isRouteFormVisible.emit(true);
    this.isUpdateMode.emit(true);
    this.selectedRoute.emit(this.currentRoute);
  }
}
