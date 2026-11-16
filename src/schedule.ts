// Classes run every weekend (Saturday and Sunday).
export const classStart = {
  first: '2026-11-07', // the very first class (YYYY-MM-DD); nothing earlier is shown
}

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)
}

// The class date to show today: today on Saturday or Sunday, otherwise the coming Saturday
export function nextClassDate(today = new Date()) {
  const day = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const weekday = day.getDay() // 0 Sunday ... 6 Saturday
  const next = weekday === 0 || weekday === 6 ? day : addDays(day, 6 - weekday)

  const [y, m, d] = classStart.first.split('-').map(Number)
  const first = new Date(y, m - 1, d)
  return next < first ? first : next
}

// e.g. "Saturday 21 November" (the next class is never more than a week away, so no year)
export function formatClassDate(date: Date) {
  return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
}

export const startDate = formatClassDate(nextClassDate())
export const startLine = `Next class starts on ${startDate}.`
