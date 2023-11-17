import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Partner } from "_api";
import { PartnerService } from "./partner.service";
import { AcceptPartner, DenyPartner, GetAllPartner, GetAllPendingPartner, UpdatePartner } from "./partner.action";
import { Observable, map, tap } from "rxjs";

interface IPartnerState {
  partners: Partner[];
  pendingPartners: Partner[];
}
@State<IPartnerState>({
  name: "partner",
  defaults: {
    partners: [],
    pendingPartners: [],
  },
})
@Injectable()
export class PartnerState {
  @Selector()
  public static getAllPartner(state: IPartnerState): Partner[] {
    return state.partners;
  }
  @Selector()
  public static getAllPendingPartner(state: IPartnerState): Partner[] {
    return state.pendingPartners;
  }

  constructor(private partnerService: PartnerService) {}

  @Action(GetAllPartner)
  public getAllPartner$(ctx: StateContext<IPartnerState>): Observable<Partner[]> {
    ctx.patchState({ partners: [] });
    console.log("all");
    return this.partnerService.getPartners$().pipe(
      tap({
        next: (partners) => ctx.patchState({ partners }),
      })
    );
  }

  @Action(GetAllPendingPartner)
  public getAllPendingPartner$(ctx: StateContext<IPartnerState>): Observable<Partner[]> {
    ctx.patchState({ pendingPartners: [] });
    return this.partnerService.getPendingPartners$().pipe(
      tap({
        next: (pendingPartners) => ctx.patchState({ pendingPartners }),
      })
    );
  }

  @Action([AcceptPartner, DenyPartner])
  public updatePendingPartners$(ctx: StateContext<IPartnerState>, action: AcceptPartner | DenyPartner): void {
    const state = ctx.getState();
    const updatedPendingPartners = state.pendingPartners.filter((partner) => partner.id !== action.partnerId);
    ctx.setState({
      ...state,
      pendingPartners: updatedPendingPartners,
    });
  }

  @Action(UpdatePartner)
  public updatePartner$(ctx: StateContext<IPartnerState>, action: UpdatePartner): void {
    const state = ctx.getState();

    console.log(state.partners);
    console.log(action.partner);
    ctx.setState({
      ...state,
      partners: [action.partner],
    });
    console.log(
      ctx.setState({
        ...state,
        partners: [action.partner],
      })
    );
  }
}
