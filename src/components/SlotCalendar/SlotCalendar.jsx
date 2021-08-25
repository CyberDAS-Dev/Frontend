import React from 'react'
import PropTypes from 'prop-types'
import { differenceInCalendarDays } from 'date-fns'
import Calendar from '@/components/Calendar/Calendar'
import s from './SlotCalendar.module.scss'

const isSameDay = (a, b) => differenceInCalendarDays(a, b) === 0

export default function SlotCalendar({
    onChange = null,
    value,
    monthSlots,
    className = '',
    disabledDates = [],
    show = true,
}) {
    /* Вспомогательные функциии */
    const today = new Date()
    const year = value.getFullYear()
    const month = value.getMonth()
    const daysInMonth = new Date(year, month, 0).getDate()

    const getDayFromSlot = (slot) => new Date(slot.time).getDate()
    // Формируем матрицу из дней и слотов
    const dailySlots = Array.from(Array(daysInMonth), () => new Array(0))
    monthSlots.map((item) => dailySlots[getDayFromSlot(item)].push(item))

    // Вспомогательная функция, подсчитывающая процентное соотношение свободных слотов к занятым
    function countFree(daySlots) {
        const freeSlots = daySlots.filter((slot) => slot.free)
        return freeSlots.length / daySlots.length
    }
    // Функция, раздающая каждому дню классы
    function getDayClass(item) {
        if (item.length > 0) {
            const freePercents = countFree(item)
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
    // Формируем массив из классов на каждый день
    const dailyClasses = dailySlots.map((day) => getDayClass(day))
    /* Вспомогательные функции кончились */

    /* 
       Так как эта функция была самой медленной на странице, её пришлось здоровски переписать 
       Она вызывается на каждом тайле и, первоначально, она при этом каждый раз пробегала по всему
       массиву слотов и искала слоты на день тайла. Это приводило к ужасной производительности. 
       Решение: провести повторяющиеся вычисления заранее. Можно было просто посчитать массив
       dailySlots и впихнуть его в эту функцию, но видимо её вызовы супер неоптимизированные,
       потому что в текущем виде (просто ищет в массиве элемент с определенным индексом) она работает 
       быстрее, чем когда она проводила вычисления сама. 
    */
    function tileClassName({ date }) {
        return dailyClasses[date.getDate()]
    }

    function tileDisabled({ date }) {
        const diffInDays = differenceInCalendarDays(today, date)
        // Нельзя записаться на прошедшие даты
        if (diffInDays > 0) {
            return true
        }
        // Если сегодня слотов нет, то на сегодня нельзя записаться и слоты точно не появятся
        if (diffInDays === 0 && dailySlots[today.getDate()].length === 0) {
            return true
        }
        return disabledDates.find((dDate) => isSameDay(dDate, date))
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
    monthSlots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            time: PropTypes.string.isRequired,
            free: PropTypes.bool.isRequired,
        })
    ).isRequired,
    show: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
}

SlotCalendar.defaultProps = {
    show: true,
    className: '',
    onChange: () => {},
    disabledDates: [],
}
