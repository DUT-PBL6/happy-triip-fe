import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
}

@Injectable({ providedIn: "root" })
export class AuthService extends BaseApiService {
  constructor(
    protected http: HttpClient,
    protected store: Store,
    protected loadingService: LoadingService,
    protected toastService: ToastService
  ) {
    super(store, http, loadingService, toastService, "auths");
  }

  public login$(email: string, password: string): Observable<LoginResponseData> {
    return super.post$({ payload: { email, password }, path: "login" });
  }
}
