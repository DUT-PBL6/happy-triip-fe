import { Partner } from "./partner.type";
import { Station } from "./station.type";
import { Transport } from "./transport.type";

export type Route = {
  id: number;
  name: string;
  departAt: Date;
  arriveAt: Date;
  fromAt: Station;
  toAt: Station;
  price: number;
  transport: Transport;
  partner: Partner;
  seats: string[];
};
