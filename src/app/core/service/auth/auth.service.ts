import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { AuthCredentialsDto, TokenResponse } from "_api";
import { clientService } from "src/lib";
import cacheService from "src/lib/cache-service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthService extends BaseApiService {
  constructor(
    protected http: HttpClient,
    protected store: Store,
    protected loadingService: LoadingService,
    protected toastService: ToastService,
    protected router: Router
  ) {
    super(store, http, loadingService, toastService, "auth");
  }

  public login$(username: string, password: string, userRole = "PARTNER"): void {
    // return super.post$({ payload: { email, password }, path: "login" });
    const authDto: AuthCredentialsDto = { username, password, userRole };
    clientService.api.authLogin(authDto).then((response) => {
      cacheService.setValue({
        accessToken: response.accessToken,
      });
      this.router.navigate([`/homepage`]);
    });
  }
}
