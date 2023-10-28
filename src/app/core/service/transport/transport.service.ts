import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transport, TransportDto } from "_api";
import { ApiService } from "../base-api/api.service";

@Injectable({ providedIn: "root" })
export class TransportService {
  constructor(protected apiService: ApiService) {}

  public getTransports$(): Observable<Transport[]> {
    return this.apiService.api.transportGetAllTransport();
  }

  public createTransport$(transportDto: TransportDto): Observable<Transport> {
    return this.apiService.api.transportCreate(transportDto);
  }

  public updateTransport$(id: number, transportDto: TransportDto): Observable<Transport> {
    return this.apiService.api.transportUpdate(id, transportDto);
  }
}
