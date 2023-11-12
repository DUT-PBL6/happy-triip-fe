import { Api } from "_api";
import { environment } from "src/environments/environment";
import cacheService from "src/lib/cache-service";
import CodeMessage from "src/lib/http-client/code-message";
import { ToastService } from "../toast/toast.service";
import { Injectable } from "@angular/core";
import { LoadingService } from "../loading/loading.service";
import { Store } from "@ngxs/store";
import { ToggleProgressSpinner } from "../loading/loading.action";

@Injectable({ providedIn: "root" })
export class ApiService extends Api<any> {
  constructor(
    protected toastService: ToastService,
    protected loadingService: LoadingService,
    protected store: Store
  ) {
    super({ baseURL: environment.apiUrl });
    this.instance.interceptors.request.use(
      (configOriginal) => {
        this.onRequest();
        const config = configOriginal;
        const accessToken = cacheService.getValue("accessToken");
        if (accessToken) {
          if (config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
        return config;
      },
      (error) => {
        this.onFinalize();
        this.toastService.showError("Error", error.message);
        Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        this.onFinalize();
        return response;
      },
      (error) => {
        this.onFinalize();
        if (error?.response.status === 401) {
          cacheService.setValue({
            accessToken: undefined,
          });
          window.location.href = "/auth/login";
        }
        let msg = error?.response.data?.message ?? CodeMessage[error?.response?.status] ?? "Something went wrong";
        if (error?.response.status === 422) {
          const errors = error?.response.data.errors;
          const errorsMsg = Object.entries(errors).reduce((accumulator: string[], currentValue) => {
            accumulator.push(`${currentValue[0]}:  ${currentValue[1]}`);
            return accumulator;
          }, []);
          msg = errorsMsg;
        }
        this.toastService.showError("Error", msg);
      }
    );
  }

  private onRequest(): void {
    this.store.dispatch(new ToggleProgressSpinner(true));
    if (this.loadingService) {
      this.loadingService.startProgress();
    }
  }

  private onFinalize(): void {
    this.store.dispatch(new ToggleProgressSpinner(false));
    if (this.loadingService) {
      this.loadingService.stopProgress();
    }
  }
}
