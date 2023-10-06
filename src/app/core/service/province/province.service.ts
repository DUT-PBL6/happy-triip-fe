import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { Province } from "src/app/domains/home/types/province.type";

@Injectable({ providedIn: "root" })
export class ProvinceService extends BaseApiService {
  constructor(
    protected http: HttpClient,
    protected store: Store,
    protected loadingService: LoadingService,
    protected toastService: ToastService
  ) {
    super(store, http, loadingService, toastService, "province");
  }

  public getProvinces$(): Observable<Province[]> {
    return this.http.get<Province[]>("https://provinces.open-api.vn/api/"); //TODO: Replace URL & save in state
  }
}
