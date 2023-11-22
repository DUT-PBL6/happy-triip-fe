import { Injectable } from "@angular/core";
import { ApiService } from "../base-api/api.service";
import { Observable, map } from "rxjs";
import { Booking, BookingDto, BookingPagingResult, HttpClient, PaymentGatewayDto } from "_api";

@Injectable({ providedIn: "root" })
export class BookingService {
  constructor(protected apiService: ApiService) {}

  public getBookingMoneyPending$(): Observable<Booking[]> {
    // return this.apiService.api.bookingGetAll().pipe(map((result: BookingPagingResult) => result.data));
    return this.apiService.api.bookingGetBookingMoneyPending();
  }
  public acceptBooking$(id: number): Observable<Booking> {
    return this.apiService.api.bookingAcceptBooking(id);
  }
  public denyBooking$(id: number): Observable<Booking> {
    return this.apiService.api.bookingDenyBooking(id);
  }
  public createBooking$(bookingDto: BookingDto): Observable<PaymentGatewayDto> {
    return this.apiService.api.bookingBooking(bookingDto);
  }


}
