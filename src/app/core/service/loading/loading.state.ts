import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ToggleProgressSpinner } from "./loading.action";

interface ILoadingState {
  isShowProgressSpinner: boolean;
}

@State<ILoadingState>({
  name: "loading",
  defaults: {
    isShowProgressSpinner: false,
  },
})
@Injectable()
export class LoadingState {
  @Selector()
  static isShowProgressSpinner(state: ILoadingState): boolean {
    return state.isShowProgressSpinner;
  }

  @Action(ToggleProgressSpinner)
  public toggleProgressSpinner(ctx: StateContext<ILoadingState>, action: ToggleProgressSpinner): void {
    ctx.patchState({
      isShowProgressSpinner: action.isProgressing,
    });
  }
}
