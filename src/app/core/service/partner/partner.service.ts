import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { ApiService } from "../base-api/api.service";
import { Partner, PartnerDto } from "_api";

@Injectable({ providedIn: "root" })
export class PartnerService {
  constructor(protected apiService: ApiService) {}
  // employee
  public getPartners$(): Observable<Partner[]> {
    return this.apiService.api.authGetAllPartner();
  }
  public getPendingPartners$(): Observable<Partner[]> {
    return this.apiService.api.authGetAllPartnerPending();
  }
  public denyPartner$(id: number): Observable<Partner> {
    return this.apiService.api.authDenyAccountPartner(id);
  }
  public acceptPartner$(id: number): Observable<Partner> {
    console.log("acc", id);
    return this.apiService.api.authAcceptAccountPartner(id);
  }
  public getPartnerById$(id: number): Observable<Partner> {
    return this.apiService.api.authGetPartnerById(id);
  }

  // partner
  public updatePartner$(partnerDto: PartnerDto): Observable<Partner> {
    return this.apiService.api.authUpdatePartner(partnerDto);
  }
  public getPartnerProfile$(): Observable<Partner> {
    return this.apiService.api.authGetDetailPartner();
  }
}
