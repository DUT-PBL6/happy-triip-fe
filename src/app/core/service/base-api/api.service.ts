import { Api } from "_api";
import { environment } from "src/environments/environment";

export class ApiService extends Api<any> {
  constructor() {
    super({ baseURL: environment.apiUrl });
  }
}
