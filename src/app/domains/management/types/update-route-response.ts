import { Route } from "_api";
import { UpdateSubPointResponse } from "./update-subpoint-response";

export type UpdateRouteResponse = Omit<
  Route,
  "routeSchedules" | "departAt" | "arriveAt" | "pickUpPoints" | "dropOffPoints"
> & {
  routeSchedules: Date[];
  departAt: Date;
  arriveAt: Date;
  pickUpPoints: UpdateSubPointResponse[];
  dropOffPoints: UpdateSubPointResponse[];
};
