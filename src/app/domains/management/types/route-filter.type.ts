import { City } from "_api";

export type RouteFilter = {
  name: string;
  departAt: string;
  id: number;
  city: City;
  images: any[];
  district: string;
  ward: string;
  address: string;
  gmapLink: string;
  embedGmapLink: string;
  description: string;
  status: string;
  date: string;
};
