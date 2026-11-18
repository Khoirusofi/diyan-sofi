import { WEDDING } from "./config.js";

export const target = new Date(WEDDING.date).getTime();

const fmt = (opts) =>
  new Intl.DateTimeFormat("id-ID", { timeZone: "Asia/Jakarta", ...opts }).format(target);

export const dateLong = fmt({ weekday: "long", day: "numeric", month: "long", year: "numeric" });
export const timeText = `${fmt({ hour: "2-digit", minute: "2-digit", hour12: false })} WIB`;

const stamp = (ms) => new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function downloadIcs() {
  const { event, groom, bride } = WEDDING;
  const esc = (s) => s.replace(/[,;]/g, (c) => `\\${c}`);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Countdown//ID",
    "BEGIN:VEVENT",
    `UID:${target}@wedding-countdown`,
    `DTSTAMP:${stamp(Date.now())}`,
    `DTSTART:${stamp(target)}`,
    `DTEND:${stamp(target + event.durationHours * 3600000)}`,
    `SUMMARY:${esc(`Pernikahan ${groom} & ${bride}`)}`,
    `LOCATION:${esc(`${event.venue}, ${event.address}`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: "pernikahan.ics" });
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
