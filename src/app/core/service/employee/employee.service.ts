import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { Employee } from "_api";

@Injectable({ providedIn: "root" })
export class EmployeeService extends BaseApiService {
  constructor(
    protected http: HttpClient,
    protected store: Store,
    protected loadingService: LoadingService,
    protected toastService: ToastService
  ) {
    super(store, http, loadingService, toastService, "employee");
  }

  public getEmployees$(): Observable<Employee[]> {
    return this.http.get<Employee[]>("https://mocki.io/v1/971fc379-1c61-4589-96d5-5baf7446c50a"); //TODO: Replace URL & save in state
  }
}
