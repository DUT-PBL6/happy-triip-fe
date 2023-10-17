import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { AuthCredentialsDto, TokenResponse } from "_api";
import { clientService } from "src/lib";
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
    super(store, http, loadingService, toastService, "auths");
  }

  public login$(authCredentialsDto: AuthCredentialsDto): Observable<any> {
    return from(clientService.api.authLogin(authCredentialsDto));
  }
}
