import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Station } from "_api";
import { StationService } from "./station.service";
import { CreateStation, GetAllStation } from "./station.action";
import { Observable, tap } from "rxjs";

interface IStationState {
  stations: Station[];
}

@State<IStationState>({
  name: "station",
  defaults: {
    stations: [],
  },
})
@Injectable()
export class StationState {
  @Selector()
  public static getAllStation(state: IStationState): Station[] {
    return state.stations;
  }

  constructor(private stationService: StationService) {}

  @Action(GetAllStation)
  public getAllStation$(ctx: StateContext<IStationState>): Observable<Station[]> {
    ctx.patchState({ stations: [] });
    return this.stationService.getStations$().pipe(
      tap({
        next: (stations) => ctx.patchState({ stations }),
      })
    );
  }

  @Action(CreateStation)
  public createStation$(ctx: StateContext<IStationState>, action: CreateStation): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      stations: [...state.stations, action.station],
    });
  }

  //TODO: define reducer for UpdateStation
}
