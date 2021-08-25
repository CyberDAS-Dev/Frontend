import { parseISO } from 'date-fns'

export const toDatetime = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
        date.getDate()
    ).padStart(2, '0')}T00:00:00`

export const toObject = (date) => {
    const splitted = date.split('T')
    const yearMonthDay = splitted[0].split('-')
        return {
            year: yearMonthDay[0],
            month: yearMonthDay[1] - 1,
        ...(yearMonthDay[2] && { day: yearMonthDay[2] }),
        }
    }

export const fromDatetime = (date) => parseISO(date)

export const daysInMonth = (year, month) => new Date(year, month, 0).getDate()

export function earliestAvailableInMonth(year, month) {
    const curMonth = new Date().getMonth()
    if (month < curMonth) {
        return false
    }
    if (month === curMonth) {
        return toDatetime(new Date())
    }

    return toDatetime(new Date(year, month, 1))
}

export const tillMonthEnd = (date) =>
    -1 * (date.getDate() - daysInMonth(date.getFullYear(), date.getMonth()))
