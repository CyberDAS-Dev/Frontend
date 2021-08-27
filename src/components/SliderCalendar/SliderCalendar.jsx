import React, { useState, useEffect } from 'react'
import {
    getDate,
    eachDayOfInterval,
    startOfMonth,
    lastDayOfMonth,
    setMonth,
    getMonth,
    getUnixTime,
    fromUnixTime,
    isWeekend,
    differenceInCalendarDays,
} from 'date-fns'
import PropTypes from 'prop-types'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons'
import { toDatetime } from '@/utils/dateLib'

import './Slider.scss'

// генерируется разметка всех дней месяца, для активных дней устанавливаются нужные классы,
// для выключенных тоже
function generateDays(dates, dailyClasses, disabledDates, clickHandler) {
    const days = dates.map((date) => {
        const dateUnix = getUnixTime(date)
        const disabled = disabledDates.includes(toDatetime(date)) ? 'disabled' : ''
        const weekend = isWeekend(date) ? 'weekend' : ''
        const daily = dailyClasses[toDatetime(date)] || ''

        return (
            <button
                id={dateUnix}
                key={dateUnix}
                className={`text-white rounded ${disabled} ${weekend}  ${daily}`}
                style={{ width: '90%', height: '4rem', border: '0' }}
                onClick={(e) => clickHandler(fromUnixTime(e.currentTarget.id))}
            >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-2">{date.toLocaleDateString('ru-RU', { weekday: 'short' })}</p>
                    <p>
                        <strong>{getDate(date)}</strong>
                    </p>
                </div>
            </button>
        )
    })

    return days
}

// собирает все дни текущего месяца в массив с датами
function generateMonthDates(month) {
    return eachDayOfInterval({
        start: startOfMonth(setMonth(new Date(), month)),
        end: lastDayOfMonth(setMonth(new Date(), month)),
    })
}

export default function SliderCalendar({
    onChange = () => {},
    value,
    className = '',
    dailyClasses = [],
    disabledDates = [],
    show = true,
}) {
    const today = new Date()
    const month = value.getMonth()

    const [monthDates, setMonthDates] = useState(generateMonthDates(getMonth(today)))

    // Добавляем в 'выключенные' все прошедшие дни
    const disabledDates2 = [...disabledDates] // копируем пропс, ибо они рид-онли
    monthDates.forEach((date) => {
        if (differenceInCalendarDays(today, date) > 0) {
            disabledDates2.push(toDatetime(date))
        }
    })

    useEffect(() => {
        setMonthDates(generateMonthDates(month))
    }, [month])

    // вызывает коллбек с новым date, если день не отключен
    function onDateChange(newDate) {
        if (typeof newDate !== 'undefined') {
            if (!disabledDates2.includes(toDatetime(newDate))) onChange(newDate)
        }
    }

    const days = generateDays(monthDates, dailyClasses, disabledDates2, onDateChange)

    if (show) {
        return (
            <Carousel
                className={className}
                plugins={[
                    'centered',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3,
                        },
                    },
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <ArrowLeft />,
                            arrowLeftDisabled: <ArrowLeft className="opacity-50" />,
                            arrowRight: <ArrowRight />,
                            arrowRightDisabled: <ArrowRight className="opacity-50" />,
                            addArrowClickHandler: true,
                        },
                    },
                ]}
                clickToChange
                value={getDate(value) - 1}
                onChange={(index) => onDateChange(monthDates[index])}
                animationSpeed={150}
            >
                {days}
            </Carousel>
        )
    }

    return ''
}

SliderCalendar.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    show: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    dailyClasses: PropTypes.objectOf(PropTypes.string),
    disabledDates: PropTypes.arrayOf(PropTypes.string),
}

SliderCalendar.defaultProps = {
    show: true,
    className: '',
    onChange: () => {},
    dailyClasses: {},
    disabledDates: [],
}
