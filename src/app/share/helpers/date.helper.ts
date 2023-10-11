import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import utc from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(timezonePlugin);
dayjs.extend(duration);

export const isBefore = (dateInput: string, dateMark: Date): boolean => {
  return dayjs(dateInput).startOf("day").isSameOrBefore(dayjs(dateMark));
};

export const isAfter = (dateInput: string, dateMark: Date): boolean => {
  return dayjs(dateInput).startOf("day").isSameOrAfter(dayjs(dateMark));
};

export const isSameDate = (dateInput: string, dateMark: Date): boolean => {
  return dayjs(dateInput).startOf("day").isSame(dayjs(dateMark), "day");
};

export const getTime = (dateInput: Date): string => {
  const date = new Date(dateInput);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

export const getHoursDifference = (departAt: Date, arriveAt: Date) => {
  const departTime = dayjs(departAt);
  const arriveTime = dayjs(arriveAt);

  const duration = dayjs.duration(arriveTime.diff(departTime));
  const hoursDifference = duration.hours();

  return hoursDifference;
};
