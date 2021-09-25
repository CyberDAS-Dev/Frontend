import React, { useState, useEffect } from 'react'
import {
    getDate,
    eachDayOfInterval,
    startOfMonth,
    lastDayOfMonth,
    setMonth,
    parseISO,
    isSameDay,
    differenceInCalendarDays,
    getUnixTime,
    isWeekend,
} from 'date-fns'
import PropTypes from 'prop-types'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons'
import { toDatetime } from '@/common/utils/dateLib'

import './Slider.scss'

// собирает все дни текущего месяца в массив с датами
function generateMonthDates(month) {
    const dates = eachDayOfInterval({
        start: startOfMonth(setMonth(new Date(), month)),
        end: lastDayOfMonth(setMonth(new Date(), month)),
    })

    return dates
}

// преобразоввывает массив с днями в финальный массив вида [[Date, 'disabled'], [Date, '']],
// отключает прошлые дни и дни из disabledDates
function sortDates(dates, disabledDates) {
    dates.forEach((date, index) => {
        dates[index] = [date, '']

        const diffInDays = differenceInCalendarDays(new Date(), date)
        if (diffInDays > 0) {
            dates[index][1] = 'disabled'
        }
        if (disabledDates.some((dDate) => isSameDay(parseISO(dDate), date))) {
            dates[index][1] = 'disabled'
        }
    })

    return dates
}

// генерируется разметка всех дней месяца, для активных дней устанавливаются нужные классы,
// для выключенных тоже
function generateDays(dates, dailyClasses) {
    const days = dates.map((dateArr) => {
        const date = dateArr[0]
        const isDisabled = dateArr[1]
        const dateUnix = getUnixTime(date)

        return (
            <button
                id={dateUnix}
                key={dateUnix}
                className={`text-white rounded ${isDisabled} ${isWeekend(date) ? 'weekend' : ''}  ${
                    dailyClasses[toDatetime(date)] || ''
                } `}
                style={{ width: '90%', height: '4rem', border: '0' }}
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

export default function SliderCalendar({
    onChange = () => {},
    value,
    className = '',
    dailyClasses = [],
    disabledDates = [],
    show = true,
}) {
    const month = value.getMonth()

    const [dates, setDates] = useState(sortDates(generateMonthDates(month), disabledDates))

    useEffect(() => {
        setDates(sortDates(generateMonthDates(month), disabledDates))
    }, [month, disabledDates])

    const days = generateDays(dates, dailyClasses, onChange)

    // вызывает коллбек с новым date, если день не отключен
    function onDateChange(index) {
        // проверка из-за неправильного поведения слайдера, при клике на любой слайд он выбрасывает NaN
        if (!Number.isNaN(index)) {
            if (!dates[index].includes('disabled')) onChange(dates[index][0])
        }
    }

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
                onChange={onDateChange}
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
