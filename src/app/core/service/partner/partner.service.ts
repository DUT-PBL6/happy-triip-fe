import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { ApiService } from "../base-api/api.service";
import { ChangePassDto, Partner, PartnerDto } from "_api";

@Injectable({ providedIn: "root" })
export class PartnerService {
  constructor(protected apiService: ApiService) {}

  public getPartners$(): Observable<Partner[]> {
    return this.apiService.api.authGetAllPartner();
  }

  // public getPendingPartners$(): Observable<Partner[]> {
  //   return this.apiService.api.authGetAllPartnerPending();
  // }

  public denyPartner$(id: number): Observable<Partner> {
    return this.apiService.api.authDenyAccountPartner(id);
  }

  public acceptPartner$(id: number): Observable<Partner> {
    return this.apiService.api.authAcceptAccountPartner(id);
  }

  public getPartnerById$(id: number): Observable<Partner> {
    return this.apiService.api.authGetPartnerById(id);
  }

  public updatePartner$(partnerDto: PartnerDto): Observable<Partner> {
    return this.apiService.api.authUpdatePartner(partnerDto);
  }

  public changePassPartner$(data: ChangePassDto) {
    return this.apiService.api.authPartnerChangePass(data);
  }

  public getCurrentPartner$(): Observable<Partner> {
    return this.apiService.api.authGetDetailPartner();
  }
}
