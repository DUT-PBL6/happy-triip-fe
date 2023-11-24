import { Injectable } from "@angular/core";
import { SeatTypeDto } from "_api";
import { Subject } from "rxjs";

interface SeatInformation {
  seatTypes: SeatTypeDto[];
  mapSeat: [];
}

@Injectable({ providedIn: "root" })
export class SeatService {
  private seatInformation: SeatInformation;
  private seatComplete = new Subject<any>();
  seatComplete$ = this.seatComplete.asObservable();

  public getSeatInformation(): SeatInformation {
    return this.seatInformation;
  }

  public setSeatInformation(seatInformation: SeatInformation): void {
    this.seatInformation = seatInformation;
  }

  public complete(): void {
    this.seatComplete.next(this.seatInformation);
  }
}
