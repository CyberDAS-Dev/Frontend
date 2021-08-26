import React from 'react'
import {
    getDate,
    eachDayOfInterval,
    startOfMonth,
    lastDayOfMonth,
    setMonth,
    parseISO,
    isSameDay,
    differenceInCalendarDays,
} from 'date-fns'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons'
import { toDatetime } from '@/utils/dateLib'

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

        return (
            <div
                className={`ps-4 ps-md-5 ps-lg-6 pe-4 pe-md-5 pe-lg-6 text-white rounded ${isDisabled} ${
                    dailyClasses[toDatetime(date)] || ''
                }`}
            >
                <div
                    style={{
                        borderRadius: '.25rem',
                        padding: '5rem !important',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <span>{date.toLocaleDateString('ru-RU', { weekday: 'short' })}</span>
                    <span>
                        <strong>{getDate(date)}</strong>
                    </span>
                </div>
            </div>
        )
    })

    return days
}

export default function SliderCalendar({ onDateChange, value, disabledDates = [], dailyClasses }) {
    const month = value.getMonth()

    const dates = sortDates(generateMonthDates(month), disabledDates)
    const days = generateDays(dates, dailyClasses)

    // вызывает коллбек с новым date, если день не отключен
    function onChange(index) {
        // проверка из-за неправильного поведения слайдера, при клике на любой слайд он выбрасывает NaN
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(index)) {
            if (!dates[index].includes('disabled')) onDateChange(dates[index][0])
        }
    }

    return (
        <Col className="mb-5 position-relative">
            <Carousel
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
                onChange={onChange}
                animationSpeed={150}
            >
                {days}
            </Carousel>
        </Col>
    )
}

SliderCalendar.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    onDateChange: PropTypes.func.isRequired,
    dailyClasses: PropTypes.func.isRequired,
    disabledDates: PropTypes.arrayOf(PropTypes.string),
}

SliderCalendar.defaultProps = {
    disabledDates: [],
}
