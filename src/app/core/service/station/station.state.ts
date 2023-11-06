import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

import { Station } from "_api";
import { Observable, tap } from "rxjs";
import { StationService } from "./station.service";
import { CreateStation, DeleteStation, GetAllStation, UpdateStation } from "./station.action";

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

  @Action(UpdateStation)
  public updateStation$(ctx: StateContext<IStationState>, action: UpdateStation): void {
    const state = ctx.getState();
    const updatedStations = state.stations.map((station) => {
      if (station.id === action.station.id) return action.station;
      return station;
    });
    ctx.setState({
      ...state,
      stations: updatedStations,
    });
  }

  @Action(DeleteStation)
  public deleteStation$(ctx: StateContext<IStationState>, action: DeleteStation): void {
    const state = ctx.getState();
    const updatedStations = state.stations.filter((station) => station.id !== action.stationId);
    ctx.setState({
      ...state,
      stations: updatedStations,
    });
  }
}
