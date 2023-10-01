import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { catchError, finalize, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { ToggleProgressSpinner } from "../loading/loading.action";

interface GetRequestType {
  queryParams?: object;
  path?: string;
  options?: object;
}

interface RequestType {
  queryParams?: object;
  payload?: object;
  path?: string;
}

export abstract class BaseApiService {
  private baseUrl = "";

  constructor(
    protected store: Store,
    protected http: HttpClient,
    protected loadingService: LoadingService,
    protected toastService: ToastService,
    protected url: string
  ) {
    this.baseUrl = url?.length ? `${environment.apiUrl}/${url}` : environment.apiUrl;
  }

  protected get$<T>(request: GetRequestType): Observable<T> {
    const { queryParams, path, options } = request;
    const endpoint = path ? `${this.baseUrl}/${path}` : `${this.baseUrl}`;

    this.onRequest();

    const params = new HttpParams({
      fromObject: { ...queryParams },
    });

    return this.http
      .get<T>(endpoint, { params, ...options })
      .pipe(finalize(() => this.onFinalize()))
      .pipe(catchError((error: HttpErrorResponse | Error) => this.onHandleError(error)));
  }

  protected post$<T>(request: RequestType): Observable<T> {
    const { queryParams, payload, path } = request;
    const endpoint = path ? `${this.baseUrl}/${path}` : `${this.baseUrl}`;

    this.onRequest();

    const params = new HttpParams({
      fromObject: { ...queryParams },
    });

    return this.http
      .post<T>(`${endpoint}`, payload, { params })
      .pipe(finalize(() => this.onFinalize()))
      .pipe(catchError((error: HttpErrorResponse | Error) => this.onHandleError(error)));
  }

  protected put$<T>(request: RequestType): Observable<T> {
    const { payload, path } = request;
    this.onRequest();
    const endpoint = path ? `${this.baseUrl}/${path}` : `${this.baseUrl}`;

    return this.http
      .put<T>(`${endpoint}`, payload)
      .pipe(finalize(() => this.onFinalize()))
      .pipe(catchError((error: HttpErrorResponse | Error) => this.onHandleError(error)));
  }

  protected delete$(request: RequestType): Observable<void> {
    const { payload, path } = request;
    this.onRequest();
    const endpoint = path ? `${this.baseUrl}/${path}` : `${this.baseUrl}`;

    return this.http
      .delete<void>(`${endpoint}`, payload)
      .pipe(finalize(() => this.onFinalize()))
      .pipe(catchError((error: HttpErrorResponse | Error) => this.onHandleError(error)));
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

  private onHandleError(error: HttpErrorResponse | Error): Observable<never> {
    let errorMessage = "";

    this.store.dispatch(new ToggleProgressSpinner(false));

    if (error instanceof HttpErrorResponse) {
      errorMessage = error.error?.message || error.message || error.toString();
    } else {
      errorMessage = error.message || error.toString();
    }

    this.toastService.showError("Error", errorMessage);

    return throwError(() => error);
  }
}
