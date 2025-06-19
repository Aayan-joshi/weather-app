import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWeekday(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { weekday: "long" }
  return new Intl.DateTimeFormat("en-US", options).format(date)
}

export function getRelativeWeekday(date: Date): string {
  const today = new Date()
  const diff = date.getTime() - today.getTime()
  const days = Math.ceil(diff / (1000 * 3600 * 24))

  if (days === 0) return "Today"
  if (days === 1) return "Tomorrow"
  if (days === -1) return "Yesterday"

  return getWeekday(date)
}

export function getWeatherIconUrl(icon: string): string {
  return `https:${icon}`;
}