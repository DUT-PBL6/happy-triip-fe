import { Station } from "_api";

export class GetAllStation {
  static readonly type = "[Station] Get all stations";
}

export class CreateStation {
  static readonly type = "[Station] Create station";
  constructor(public station: Station) {}
}

export class UpdateStation {
  static readonly type = "[Station] Update station";
  constructor(public station: Station) {}
}
