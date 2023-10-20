import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../base-api/api.service";
import { AuthCredentialsDto, TokenResponse } from "_api";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private apiService: ApiService) {}

  public login$(authCredentialsDto: AuthCredentialsDto): Observable<TokenResponse> {
    return this.apiService.api.authLogin(authCredentialsDto);
  }
}
