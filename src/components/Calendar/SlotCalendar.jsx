import React from 'react'
import Calendar from 'react-calendar'
import { differenceInCalendarDays } from 'date-fns'
import './SlotCalendar.module.scss'

function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0
}

export default function SlotCalendar({
    onChange,
    value,
    monthValue,
    slots,
    className,
    disabledDates,
}) {
    const extractDaySlots = (day) => slots.filter((slot) => isSameDay(new Date(slot.time), day))

    function countDemand(day) {
        const daySlots = extractDaySlots(day)
        const freeSlots = daySlots.filter((slot) => slot.free)
        return freeSlots.length / daySlots.length
    }

    function tileClassName({ date, view }) {
        if (view === 'month') {
            if (extractDaySlots(date).length > 0) {
                const demand = countDemand(date)
                if (demand === 0) {
                    return 'busy_tile'
                }
                if (demand < 0.5) {
                    return 'hot_tile'
                }
                return 'available_tile'
            }
        }
        return false
    }

    function tileDisabled({ date, view }) {
        if (view === 'month') {
            // Нельзя записаться на прошедшие даты
            if (differenceInCalendarDays(new Date(), date) > 0) {
                return true
            }
            // Если сегодня слотов нет, то на сегодня нельзя записаться и слоты точно не появятся
            if (isSameDay(new Date(), date) && extractDaySlots(new Date()).length === 0) {
                return true
            }
            return disabledDates.find((dDate) => isSameDay(dDate, date))
        }
        return false
    }

    return (
        <div className={`${className || ''}`}>
            <Calendar
                onChange={onChange}
                value={value}
                activeStartDate={new Date(new Date().getFullYear(), monthValue, 1)}
                view="month"
                maxDetail="month"
                minDetail="year"
                showNeighboringMonth={false}
                showNavigation={false}
                locale="ru-RU"
                calendarType="ISO 8601"
                tileDisabled={tileDisabled}
                tileClassName={tileClassName}
            />
        </div>
    )
}
