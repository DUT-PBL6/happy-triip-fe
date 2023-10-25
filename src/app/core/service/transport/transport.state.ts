import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Transport } from "_api";
import { TransportService } from "./transport.service";
import { CreateTransport, GetAllTransport, UpdateTransport } from "./transport.action";
import { Observable, tap } from "rxjs";

interface ITransportState {
  transports: Transport[];
}

@State<ITransportState>({
  name: "transport",
  defaults: {
    transports: [],
  },
})
@Injectable()
export class TransportState {
  @Selector()
  public static getAllTransport(state: ITransportState): Transport[] {
    return state.transports;
  }

  constructor(private transportService: TransportService) {}

  @Action(GetAllTransport)
  public getAllTransport$(ctx: StateContext<ITransportState>): Observable<Transport[]> {
    ctx.patchState({ transports: [] });
    return this.transportService.getTransports$().pipe(
      tap({
        next: (transports) => ctx.patchState({ transports }),
      })
    );
  }

  @Action(CreateTransport)
  public createTransport$(ctx: StateContext<ITransportState>, action: CreateTransport): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      transports: [...state.transports, action.transport],
    });
  }

  @Action(UpdateTransport)
  public updateTransport$(ctx: StateContext<ITransportState>, action: UpdateTransport): void {
    const state = ctx.getState();
    const updatedTransports = state.transports.map((employee) => {
      if (employee.id === action.transport.id) return action.transport;
      return employee;
    });
    ctx.setState({
      ...state,
      transports: updatedTransports,
    });
  }
}
