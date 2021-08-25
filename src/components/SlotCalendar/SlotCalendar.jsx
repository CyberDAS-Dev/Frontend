import React from 'react'
import PropTypes from 'prop-types'
import { differenceInCalendarDays } from 'date-fns'
import Calendar from '@/components/Calendar/Calendar'
import { toDatetime, fromDatetime } from '@/utils/dateLib'
import s from './SlotCalendar.module.scss'

const isSameDay = (a, b) => differenceInCalendarDays(a, b) === 0

// Формируем словарь классов для дней
export function getDayClass(daySlots) {
    if (daySlots.length > 0) {
        const freeSlots = daySlots.filter((slot) => slot.free)
        const freePercents = freeSlots.length / daySlots.length

        if (freePercents === 0) {
            return 'busy_tile'
        }
        if (freePercents <= 0.5) {
            return 'hot_tile'
        }
        return 'available_tile'
    }
    return false
}

// Формируем список отключенных дат
// Должна быть пригодна для Array.prototype.filter(), т.е возвращать true/false
export function isDayDisabled(day, today, dailySlots) {
    const diffInDays = differenceInCalendarDays(fromDatetime(today), fromDatetime(day))
    // Если сегодня слотов нет, то на сегодня нельзя записаться и слоты точно не появятся
    if (diffInDays === 0 && dailySlots[today].length === 0) {
        return true
    }
    return false
}

export default function SlotCalendar({
    onChange = null,
    value,
    className = '',
    dailyClasses = [],
    disabledDates = [],
    show = true,
}) {
    const today = new Date()
    const year = value.getFullYear()
    const month = value.getMonth()

    /* 
       Так как эта функция была самой медленной на странице, её пришлось здоровски переписать 
       Она вызывается на каждом тайле и, первоначально, она при этом каждый раз пробегала по всему
       массиву слотов и искала слоты на день тайла. Это приводило к ужасной производительности. 
       Решение: провести повторяющиеся вычисления заранее. Можно было просто посчитать массив
       dailySlots и впихнуть его в эту функцию, позволив ей самой назначать классы и сохранив
       таким образом модульность. Но видимо её вызовы супер неоптимизированные, потому что в 
       текущем виде (просто ищет в массиве класс по дате) она работает  быстрее, чем когда она 
       проводила вычисления сама. Поэтому изменения в стилизации тайлов нужно вносить в функции выше

       Ключевое при этом то, что массивы с dailyClasses и disabledDates передаются извне
       и не перерасчитываются при каждом ререндере (т.е выборе даты) в календаре
    */
    function tileClassName({ date }) {
        return dailyClasses[toDatetime(date)]
    }

    function tileDisabled({ date }) {
        const diffInDays = differenceInCalendarDays(today, date)
        // Нельзя записаться на прошедшие даты
        if (diffInDays > 0) {
            return true
        }
        return disabledDates.find((dDate) => isSameDay(fromDatetime(dDate), date))
    }

    return (
        <Calendar
            show={show}
            className={`${s.wrapper} ${className || ''}`}
            onChange={onChange}
            value={value}
            activeStartDate={new Date(year, month, 1)}
            view="month"
            maxDetail="month"
            minDetail="year"
            showNeighboringMonth={false}
            showNavigation={false}
            tileClassName={tileClassName}
            tileDisabled={tileDisabled}
        />
    )
}

SlotCalendar.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    show: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    dailyClasses: PropTypes.objectOf(PropTypes.string),
    disabledDates: PropTypes.arrayOf(PropTypes.string),
}

SlotCalendar.defaultProps = {
    show: true,
    className: '',
    onChange: () => {},
    dailyClasses: {},
    disabledDates: [],
}
