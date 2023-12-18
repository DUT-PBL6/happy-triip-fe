import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Booking } from "_api";
import { Observable, tap } from "rxjs";
import { BookingService } from "./booking.service";
import {
  AcceptBooking,
  DenyBooking,
  GetBookingMoneyPending,
  GetBookingRecentOrders,
  GetBookingsByPassenger,
  UpdateBookingDate,
} from "./booking.action";

interface IBookingState {
  bookings: Booking[];
  bookingDate: string;
  bookingHistories: Booking[];
  bookingRecentOrders: Booking[];
}
@State<IBookingState>({
  name: "booking",
  defaults: {
    bookings: [],
    bookingDate: "",
    bookingHistories: [],
    bookingRecentOrders: [],
  },
})
@Injectable()
export class BookingState {
  @Selector()
  public static getBookingMoneyPending(state: IBookingState): Booking[] {
    return state.bookings;
  }

  @Selector()
  public static getBookingsByPassenger(state: IBookingState): Booking[] {
    return state.bookingHistories;
  }

  @Selector()
  public static getBookingDate(state: IBookingState): string {
    return state.bookingDate;
  }

  @Selector()
  public static getBookingRecentOrders(state: IBookingState): Booking[] {
    return state.bookingRecentOrders;
  }

  constructor(private bookingService: BookingService) {}

  @Action(GetBookingMoneyPending)
  public getBookingMoneyPending$(ctx: StateContext<IBookingState>): Observable<Booking[]> {
    ctx.patchState({ bookings: [] });
    return this.bookingService.getBookingMoneyPending$().pipe(
      tap({
        next: (bookings) => ctx.patchState({ bookings }),
      })
    );
  }
  @Action(GetBookingRecentOrders)
  public getBookingRecentOrders$(ctx: StateContext<IBookingState>): Observable<Booking[]> {
    ctx.patchState({ bookings: [] });
    return this.bookingService.getBookingRecentOrders$().pipe(
      tap({
        next: (bookingRecentOrders) => ctx.patchState({ bookingRecentOrders }),
      })
    );
  }

  @Action(GetBookingsByPassenger)
  public getBookingsByPassenger$(ctx: StateContext<IBookingState>): Observable<Booking[]> {
    ctx.patchState({ bookingHistories: [] });
    return this.bookingService.getBookingsByPassenger$().pipe(
      tap({
        next: (bookingHistories) => ctx.patchState({ bookingHistories }),
      })
    );
  }

  @Action([AcceptBooking, DenyBooking])
  public updatePendingBooking$(ctx: StateContext<IBookingState>, action: AcceptBooking | DenyBooking): void {
    const state = ctx.getState();
    const updatedPendingBooking = state.bookings.filter((booking) => booking.id !== action.bookingId);
    ctx.setState({
      ...state,
      bookings: updatedPendingBooking,
    });
  }

  @Action(UpdateBookingDate)
  public updateBookingDate$(ctx: StateContext<IBookingState>, action: UpdateBookingDate): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      bookingDate: action.date,
    });
  }
}
