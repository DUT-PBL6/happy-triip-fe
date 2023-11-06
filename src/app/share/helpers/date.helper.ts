import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import utc from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import { DATE_FORMAT } from "../constants";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(timezonePlugin);
dayjs.extend(duration);

export const getTime = (dateInput: string): string => {
  const date = new Date(dateInput);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

export const getHoursDifference = (departAt: string, arriveAt: string) => {
  const departTime = dayjs(departAt);
  const arriveTime = dayjs(arriveAt);

  const duration = dayjs.duration(arriveTime.diff(departTime));
  const hoursDifference = duration.hours();

  return hoursDifference;
};

export const formatDate = (dateString: string): string => {
  const date = dayjs(dateString);
  return date.format(DATE_FORMAT);
};
