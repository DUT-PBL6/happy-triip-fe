import { MessageService } from "primeng/api";

import { Api } from "../../../_api";
import cacheService from "../cache-service";
import CodeMessage from "./code-message";
import { environment } from "src/environments/environment";

const clientService = new Api({ baseURL: environment.apiUrl ?? "" });
clientService.instance.interceptors.request.use(
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
    new MessageService().add({ severity: "error", summary: "Error message", detail: error });
    Promise.reject(error);
  }
);
clientService.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response.status === 401) {
      cacheService.setValue({
        accessToken: undefined,
      });
      window.location.href = "/login";
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
    new MessageService().add({ severity: "error", summary: "Error message", detail: error });
  }
);
export default clientService;
