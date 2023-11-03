import { StationDto, StationPagingResult } from "./../../../../../_api";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ApiService } from "../base-api/api.service";
import { Station } from "_api";

@Injectable({ providedIn: "root" })
export class StationService {
  constructor(protected apiService: ApiService) {}

  public getStations$(): Observable<Station[]> {
    return this.apiService.api.stationGetAll().pipe(map((result: StationPagingResult) => result.data));
  }

  public createStation$(stationDto: StationDto): Observable<Station> {
    return this.apiService.api.stationCreate(stationDto);
  }

  // write updateStation$
}
