import { Api } from "_api";
import { environment } from "src/environments/environment";
import cacheService from "src/lib/cache-service";
import CodeMessage from "src/lib/http-client/code-message";
import { ToastService } from "../toast/toast.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ApiService extends Api<any> {
  constructor(protected toastService: ToastService) {
    super({ baseURL: environment.apiUrl });
    this.instance.interceptors.request.use(
      (configOriginal) => {
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
        this.toastService.showError("Error", error.message);
        Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
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
        this.toastService.showError("Error", error?.response.data?.message);
      }
    );
  }
}
