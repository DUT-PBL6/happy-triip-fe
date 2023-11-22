import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BookingDto, PaymentGatewayDto, Route } from "_api";
import { ApiService } from "../base-api/api.service";

@Injectable({ providedIn: "root" })
export class BookingService {
  constructor(
    protected apiService: ApiService,
    protected http: HttpClient
  ) {}

  public createBooking$(bookingDto: BookingDto): Observable<PaymentGatewayDto> {
    return this.apiService.api.bookingBooking(bookingDto);
  }
}
