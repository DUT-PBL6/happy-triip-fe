import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transport, TransportDto } from "_api";
import { ApiService } from "../base-api/api.service";

@Injectable({ providedIn: "root" })
export class TransportService {
  constructor(protected apiService: ApiService) {}

  public getTransports$(): Observable<Transport[]> {
    return this.apiService.api.transportGetAll();
  }

  public createTransport$(transportDto: TransportDto): Observable<Transport> {
    return this.apiService.api.transportCreate(transportDto);
  }

  public updateTransport$(id: string, transportDto: TransportDto): Observable<Transport> {
    return this.apiService.api.transportUpdate(id, transportDto);
  }
}
