import { parseISO } from 'date-fns'

export const toDate = (date, monthOnly = false) => {
    const year = `${date.getFullYear()}`
    const month = `${String(date.getMonth() + 1).padStart(2, '0')}`
    if (monthOnly) {
        return `${year}-${month}`
    }
    const day = `${String(date.getDate()).padStart(2, '0')}`
    return `${year}-${month}-${day}`
}

export const toDatetime = (date) => `${String(toDate(date))}T00:00:00`

export const toObject = (date) => {
    const splitted = date.split('T')
    const yearMonthDay = splitted[0].split('-')
    return {
        year: parseInt(yearMonthDay[0], 10),
        month: parseInt(yearMonthDay[1] - 1, 10),
        ...(yearMonthDay[2] && { day: parseInt(yearMonthDay[2], 10) }),
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
