import { TransportType } from "./../enums/transport.enum";

export type Transport = {
  id: number;
  name: string;
  capacity: number;
  type: TransportType;
  seatType: object;
  additionalService: object;
  image: string;
  utilities: string[];
  images: string[];
};
