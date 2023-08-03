import {
  addMilliseconds,
  format,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { dash, dot } from "@/separators";

const fmtDate = (d?: Date) => (d ? format(d, "LLL y") : "Now");

function fmtDuration(start: Date, end = now()) {
  const duration = intervalToDuration({ start, end });
  const formattedDuration = formatDuration(duration, {
    format: ["years", "months"],
  });
  return formattedDuration;
}

export function formatRange(start: Date, end?: Date) {
  const range = [start, end].map(fmtDate).join(` ${dash} `);
  const formattedDuration = fmtDuration(start, end);
  const formattedRange = `${range} ${dot} ${formattedDuration}`;
  return formattedRange;
}

const ONE_MILLISECOND = 1;
const ONE_SECOND = 1000 * ONE_MILLISECOND;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;

const BRTOffsetMillisFromUTC = -3 * ONE_HOUR;

export const now = (offsetMillis = BRTOffsetMillisFromUTC) =>
  addMilliseconds(new Date(), offsetMillis);
