import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../base-api/api.service";
import { AuthCredentialsDto, TokenResponse, UserDto } from "_api";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private apiService: ApiService) {}

  public login$(authCredentialsDto: AuthCredentialsDto): Observable<TokenResponse> {
    return this.apiService.api.authLogin(authCredentialsDto);
  }
  public registerPartner$(user:UserDto):Observable<TokenResponse>{
    return this.apiService.api.authPartnerSignUp(user)
  }
  public registerPassenger$(user:UserDto):Observable<TokenResponse>{
    return this.apiService.api.authPassengerSignUp(user)
  }


}
