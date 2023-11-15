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
  const date = dayjs(dateInput);
  const timeString = date.format("HH:mm");

  return timeString;
};

export const getHoursDifference = (departAt: string, arriveAt: string): number => {
  const departTime = dayjs(departAt);
  const arriveTime = dayjs(arriveAt);

  const duration = dayjs.duration(arriveTime.diff(departTime));

  const hoursDifference = duration.asHours();
  return hoursDifference;
};

export const formatDate = (dateString: string): string => {
  const date = dayjs(dateString);
  return date.format(DATE_FORMAT);
};

export const parseTimeStringToDate = (timeString: string): Date => {
  const currentTime = dayjs()
    .set("hour", Number(timeString.split(":")[0]))
    .set("minute", Number(timeString.split(":")[1]))
    .set("second", Number(timeString.split(":")[2]))
    .toDate();

  return currentTime;
};
