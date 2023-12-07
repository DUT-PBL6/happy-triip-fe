import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Passenger } from "_api";
import { Observable, tap } from "rxjs";
import { PassengerService } from "./passenger.service";
import { GetCurrentPassenger, UpdatePassenger } from "./passenger.action";

interface IPassengerState {
  currentPassenger: Passenger | undefined;
}
@State<IPassengerState>({
  name: "passenger",
  defaults: {
    currentPassenger: undefined,
  },
})
@Injectable()
export class PassengerState {
  @Selector()
  public static getCurrentPassenger(state: IPassengerState): Passenger {
    return state.currentPassenger;
  }

  constructor(private passengerService: PassengerService) {}

  @Action(GetCurrentPassenger)
  public getCurrentPassenger$(ctx: StateContext<IPassengerState>): Observable<Passenger> {
    ctx.patchState({ currentPassenger: undefined });

    return this.passengerService.getCurrentPassenger$().pipe(
      tap({
        next: (currentPassenger) => ctx.patchState({ currentPassenger }),
      })
    );
  }

  @Action(UpdatePassenger)
  public updatePassenger$(ctx: StateContext<IPassengerState>, action: UpdatePassenger): void {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      currentPassenger: action.passenger,
    });
  }
}
