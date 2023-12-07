export class GetBookingMoneyPending {
  static readonly type = "[Booking] Get bookings money pending";
}

export class GetBookingsByPassenger {
  static readonly type = "[Booking] Get bookings by passenger";
}

export class AcceptBooking {
  static readonly type = "[Booking] Accept booking";
  constructor(public bookingId: number) {}
}
export class DenyBooking {
  static readonly type = "[Booking] Deny booking";
  constructor(public bookingId: number) {}
}

export class UpdateBookingDate {
  static readonly type = "[Route] Update booking date";
  constructor(public date: string) {}
}
