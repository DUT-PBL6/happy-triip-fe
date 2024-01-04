import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "../base-api/api.service";
import { ChangePassDto, Passenger, PassengerDto } from "_api";

@Injectable({ providedIn: "root" })
export class PassengerService {
  constructor(protected apiService: ApiService) {}

  public updatePassenger$(passengerDto: PassengerDto): Observable<Passenger> {
    return this.apiService.api.authUpdatePassenger(passengerDto);
  }
  public getCurrentPassenger$(): Observable<Passenger> {
    return this.apiService.api.authGetDetailPassenger();
  }
  public changePassPassenger$(data: ChangePassDto) {
    return this.apiService.api.authPassengerChangePass(data);
  }
}
