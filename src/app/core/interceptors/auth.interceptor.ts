import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private route: Router) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    if (!token) {
      return next.handle(req);
    }
    const modifiedRequest = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`),
    });
    return next.handle(modifiedRequest).pipe(
      tap({
        next: () => undefined,
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              localStorage.removeItem("token");
              this.route.navigate(["/auths"]);
            }
          }
        },
      })
    );
  }
}
