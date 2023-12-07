import { Passenger } from "_api";

export class UpdatePassenger {
  static readonly type = "[Passenger] Update passenger";
  constructor(public passenger: Passenger) {}
}

export class GetCurrentPassenger {
  static readonly type = "[Passenger] Get current passenger";
}
