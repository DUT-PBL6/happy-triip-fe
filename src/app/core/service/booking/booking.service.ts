import { Injectable } from "@angular/core";
import { ApiService } from "../base-api/api.service";
import { Observable } from "rxjs";
import { Booking, BookingDto, PaymentGatewayDto, PaymentGatewayResDto } from "_api";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: "root" })
export class BookingService {
  constructor(
    protected apiService: ApiService,
    protected http: HttpClient
  ) {}

  public getBookingMoneyPending$(): Observable<Booking[]> {
    return this.apiService.api.bookingGetBookingMoneyPending();
  }

  public getBookingsByPassenger$(): Observable<Booking[]> {
    return this.apiService.api.bookingGetAllBookingOfPassenger();
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

  public createBookingByCash$(bookingDto: BookingDto): Observable<Booking> {
    return this.apiService.api.bookingBookingCash(bookingDto);
  }

  public updateBookingStatus$(paymentGatewayResDto: PaymentGatewayResDto): Observable<Booking> {
    return this.apiService.api.bookingUpdateStatus(paymentGatewayResDto);
  }

  public getBookingDetailByPassenger$(bookingId: number): Observable<Booking> {
    return this.apiService.api.bookingGetById(bookingId);
  }

  public getBookingRecentOrders$(): Observable<Booking[]> {
    return this.apiService.api.bookingGetBookingRecentOrders();
  }

  public getMonthlySalesReport$(month: any): Observable<void> {
    return this.apiService.api.bookingGetMonthlySalesReport(month);
  }

  public getYearlySalesReport$(year: any): Observable<void> {
    return this.apiService.api.bookingGetYearlySalesReport(year);
  }

  public getDailySalesReport$(): Observable<void> {
    return this.apiService.api.bookingGetDailySalesReport();
  }
}
