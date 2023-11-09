import { Route } from "_api";

export class GetAllRoute {
  static readonly type = "[Route] Get all routes";
}

export class GetAllPendingRoute {
  static readonly type = "[Route] Get all pending routes";
}

export class CreateRoute {
  static readonly type = "[Route] Create route";
  constructor(public route: Route) {}
}

export class UpdateRoute {
  static readonly type = "[Route] Update route";
  constructor(public route: Route) {}
}
