
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { ApiService } from "../base-api/api.service";
import { Station, StationDto, StationPagingResult, Transport} from "_api";


@Injectable({ providedIn: "root" })
export class StationService {
  constructor(protected apiService: ApiService) {}


public getStations$(): Observable<Station[]> {
  return this.apiService.api.stationGetAll().pipe(map((result: StationPagingResult) => result.data));
}
public createStation$(stationDto:StationDto) : Observable<Station> {
return this.apiService.api.stationCreate(stationDto)
}

public updateStation$(id:number ,stationDto:StationDto):Observable<Station> {
 return this.apiService.api.stationUpdateById(id,stationDto)
}
public deleteStation$(id:number):Observable<Station> {
  return this.apiService.api.stationDelete(id);
}

}

