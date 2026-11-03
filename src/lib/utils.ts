import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MONTH_MAP: Record<string, string> = {
  jan: "JAN",
  january: "JAN",
  feb: "FEB",
  february: "FEB",
  mar: "MAR",
  march: "MAR",
  apr: "APR",
  april: "APR",
  may: "MAY",
  jun: "JUN",
  june: "JUN",
  jul: "JUL",
  july: "JUL",
  aug: "AUG",
  august: "AUG",
  sep: "SEP",
  sept: "SEP",
  september: "SEP",
  oct: "OCT",
  october: "OCT",
  nov: "NOV",
  november: "NOV",
  dec: "DEC",
  december: "DEC",
};

const MONTH_NUMS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export function formatMmmYy(dateStr?: string, fallbackYear?: number): string {
  if (!dateStr) {
    return fallbackYear ? `JAN/${String(fallbackYear).slice(-2)}` : "";
  }
  const lower = dateStr.toLowerCase();
  let foundMonth = "";
  for (const [mName, mCode] of Object.entries(MONTH_MAP)) {
    if (new RegExp(`\\b${mName}\\b`).test(lower)) {
      foundMonth = mCode;
      break;
    }
  }

  // Look for slash or dash date like 2026/03 or 2026-03
  const numDateMatch = dateStr.match(/\b(20\d{2})[-/](\d{1,2})\b/);
  if (numDateMatch) {
    const yr = numDateMatch[1].slice(-2);
    const mNum = parseInt(numDateMatch[2], 10);
    if (mNum >= 1 && mNum <= 12) {
      return `${MONTH_NUMS[mNum - 1]}/${yr}`;
    }
  }

  const yearMatch = dateStr.match(/\b(20\d{2})\b/);
  const yy = yearMatch
    ? yearMatch[1].slice(-2)
    : fallbackYear
    ? String(fallbackYear).slice(-2)
    : "";

  if (foundMonth && yy) return `${foundMonth}/${yy}`;
  if (foundMonth) return foundMonth;
  if (yy) return `JAN/${yy}`;
  return dateStr;
}

export function getMilestoneDate(
  m: { title: string; url?: string; date?: string },
  fallbackYear?: number
): string {
  if (m.date) return formatMmmYy(m.date, fallbackYear);
  if (m.url) {
    const urlMatch = m.url.match(/\/(20\d{2})\/(\d{1,2})\//);
    if (urlMatch) {
      const yr = urlMatch[1].slice(-2);
      const mNum = parseInt(urlMatch[2], 10);
      if (mNum >= 1 && mNum <= 12) {
        return `${MONTH_NUMS[mNum - 1]}/${yr}`;
      }
    }
    const yearMatch = m.url.match(/\b(20\d{2})\b/);
    if (yearMatch) {
      return `MAR/${yearMatch[1].slice(-2)}`;
    }
  }
  const titleDate = formatMmmYy(m.title, fallbackYear);
  if (titleDate && titleDate.includes("/")) return titleDate;
  if (fallbackYear) return `JAN/${String(fallbackYear).slice(-2)}`;
  return "MAR/26";
}

