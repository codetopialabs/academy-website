// When classes start. Change these two values to move the schedule.
export const classStart = {
  first: '2026-11-07', // the very first class (YYYY-MM-DD)
  weekday: 6, // new classes start on the first one of these each month: 0 Sunday ... 6 Saturday
}

function firstWeekdayOf(year: number, month: number) {
  const first = new Date(year, month, 1)
  const offset = (classStart.weekday - first.getDay() + 7) % 7
  return new Date(year, month, 1 + offset)
}

// The next start date on or after today
export function nextClassDate(today = new Date()) {
  const day = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const [y, m, d] = classStart.first.split('-').map(Number)
  const first = new Date(y, m - 1, d)
  if (day <= first) return first

  const thisMonth = firstWeekdayOf(day.getFullYear(), day.getMonth())
  return thisMonth >= day ? thisMonth : firstWeekdayOf(day.getFullYear(), day.getMonth() + 1)
}

// e.g. "Saturday 7 November" (the next start is never more than about 5 weeks away, so no year)
export function formatClassDate(date: Date) {
  return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
}

export const startDate = formatClassDate(nextClassDate())
