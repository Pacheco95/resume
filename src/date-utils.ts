import { format, intervalToDuration, formatDuration } from "date-fns";
import { dash, dot } from "@/separators";

const fmtDate = (d: Date) => format(d, "LLL y");

function fmtDuration(end: Date, start: Date) {
  const duration = intervalToDuration({ end, start });
  const formattedDuration = formatDuration(duration, {
    format: ["years", "months"],
  });
  return formattedDuration;
}

export function formatRange(start: Date, end: Date) {
  const range = [start, end].map(fmtDate).join(` ${dash} `);
  const formattedDuration = fmtDuration(end, start);
  const formattedRange = `${range} ${dot} ${formattedDuration}`;
  return formattedRange;
}
