// When classes start. Change these two values to move the schedule.
export const classStart = {
  first: '2026-11-07', // the very first class (YYYY-MM-DD)
  weekday: 6, // new classes start on the first one of these each month: 0 Sunday ... 6 Saturday
  keepDays: 7, // keep showing a start date for this many days after it, then move to the next one
}

function firstWeekdayOf(year: number, month: number) {
  const first = new Date(year, month, 1)
  const offset = (classStart.weekday - first.getDay() + 7) % 7
  return new Date(year, month, 1 + offset)
}

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)
}

// The start date to show today
export function nextClassDate(today = new Date()) {
  const day = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const [y, m, d] = classStart.first.split('-').map(Number)
  const first = new Date(y, m - 1, d)
  if (day <= addDays(first, classStart.keepDays)) return first

  const thisMonth = firstWeekdayOf(day.getFullYear(), day.getMonth())
  return day <= addDays(thisMonth, classStart.keepDays)
    ? thisMonth
    : firstWeekdayOf(day.getFullYear(), day.getMonth() + 1)
}

// e.g. "Saturday 7 November" (the next start is never more than about 5 weeks away, so no year)
export function formatClassDate(date: Date) {
  return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
}

const today = new Date()
const shown = nextClassDate(today)

export const startDate = formatClassDate(shown)
// true during the extra days after a start date, when people can still join
export const classStarted = new Date(today.getFullYear(), today.getMonth(), today.getDate()) > shown
export const startLine = classStarted
  ? `Classes started ${startDate}. You can still join this week.`
  : `Next class starts on ${startDate}.`
