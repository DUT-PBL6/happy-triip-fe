import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { ApiService } from "../base-api/api.service";
import { AuthCredentialsDto } from "_api";

@Injectable({ providedIn: "root" })
export class AuthService extends BaseApiService {
  constructor(
    protected http: HttpClient,
    protected store: Store,
    protected loadingService: LoadingService,
    protected toastService: ToastService,
    private apiService: ApiService
  ) {
    super(store, http, loadingService, toastService, "auth");
  }

  public login$(authCredentialsDto: AuthCredentialsDto): Observable<any> {
    return this.apiService.api.authLogin(authCredentialsDto);
  }
}
