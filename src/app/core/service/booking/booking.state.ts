import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Booking } from "_api";
import { Observable, tap } from "rxjs";
import { BookingService } from "./booking.service";
import {
  AcceptBooking,
  DenyBooking,
  GetBookingMoneyPending,
  GetBookingsByPassenger,
  UpdateBookingDate,
} from "./booking.action";

interface IBookingState {
  bookings: Booking[];
  bookingDate: string;
  bookingHistories: Booking[];
}
@State<IBookingState>({
  name: "booking",
  defaults: {
    bookings: [],
    bookingDate: "",
    bookingHistories: [],
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
