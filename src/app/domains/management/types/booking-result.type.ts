import { Booking } from "_api";

export type BookingResult = Omit<Booking, "soldOn"> & {
  soldOn: Date;
};
