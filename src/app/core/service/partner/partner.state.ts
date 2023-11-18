import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Partner } from "_api";
import { PartnerService } from "./partner.service";
import { AcceptPartner, DenyPartner, GetAllPartner, GetCurrentPartner, UpdatePartner } from "./partner.action";
import { Observable, tap } from "rxjs";

interface IPartnerState {
  partners: Partner[];
  currentPartner: Partner | undefined;
}
@State<IPartnerState>({
  name: "partner",
  defaults: {
    partners: [],
    currentPartner: undefined,
  },
})
@Injectable()
export class PartnerState {
  @Selector()
  public static getAllPartner(state: IPartnerState): Partner[] {
    return state.partners;
  }

  @Selector()
  public static getCurrentPartner(state: IPartnerState): Partner {
    return state.currentPartner;
  }

  constructor(private partnerService: PartnerService) {}

  @Action(GetAllPartner)
  public getAllPartner$(ctx: StateContext<IPartnerState>): Observable<Partner[]> {
    ctx.patchState({ partners: [] });

    return this.partnerService.getPartners$().pipe(
      tap({
        next: (partners) => ctx.patchState({ partners }),
      })
    );
  }

  @Action(GetCurrentPartner)
  public getCurrentPartner$(ctx: StateContext<IPartnerState>): Observable<Partner> {
    ctx.patchState({ currentPartner: undefined });

    return this.partnerService.getCurrentPartner$().pipe(
      tap({
        next: (currentPartner) => ctx.patchState({ currentPartner }),
      })
    );
  }

  @Action([AcceptPartner])
  public acceptPartner$(ctx: StateContext<IPartnerState>, action: AcceptPartner): void {
    const state = ctx.getState();
    const updatedPartners = state.partners.map((partner) => {
      if (partner.id !== action.partnerId) return partner;
      return {
        ...partner,
        status: "ACCEPTED",
      };
    });

    ctx.setState({
      ...state,
      partners: updatedPartners,
    });
  }

  @Action([DenyPartner])
  public denyPartner$(ctx: StateContext<IPartnerState>, action: DenyPartner): void {
    const state = ctx.getState();
    const updatedPartners = state.partners.map((partner) => {
      if (partner.id !== action.partnerId) return partner;
      return {
        ...partner,
        status: "DENIED",
      };
    });

    ctx.setState({
      ...state,
      partners: updatedPartners,
    });
  }

  @Action(UpdatePartner)
  public updatePartner$(ctx: StateContext<IPartnerState>, action: UpdatePartner): void {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      currentPartner: action.partner,
    });
  }
}
