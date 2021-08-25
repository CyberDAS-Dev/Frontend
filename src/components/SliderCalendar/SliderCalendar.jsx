import React, { useEffect, useRef } from 'react'
import { Row } from 'react-bootstrap'
import {
    getDate,
    eachDayOfInterval,
    startOfMonth,
    lastDayOfMonth,
    setMonth,
    getMonth,
} from 'date-fns'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
// import dailyClasses from 'dailyClasses';
// import toDatetime from 'toDatetime'

import './Slick.scss'

export default function SliderCalendar({ onDateChange = null, month, disabledDates = [] }) {
    const currMonth = getMonth(new Date())

    const slickRef = useRef()

    // количество дней (индексов) от начала месяца до текущего дня
    const offset = getDate(new Date()) - 1

    // при изменении месяца сбрасывает положение слайдера
    useEffect(() => {
        if (month !== currMonth) slickRef.current.slickGoTo(0, true)
        if (month === currMonth) slickRef.current.slickGoTo(offset, true)
    }, [month, currMonth, offset])

    // собирает все дни текущего месяца в массив
    const dates = eachDayOfInterval({
        start: startOfMonth(setMonth(new Date(), month)),
        end: lastDayOfMonth(setMonth(new Date(), month)),
    })

    // генерируется разметка всех дней месяца, для активных дней устанавливаются нужные классы
    const days = dates.map((date) => {
        return (
            // <div className={`ps-4 ps-md-5 ps-lg-6 pe-4 pe-md-5 pe-lg-6 bg-success text-white bg-opacity-50 ${dailyClasses[toDatetime(date) || ''} ${disabledDates.includes(date) ? 'disabled' : ' }`}>
            <div className="ps-3 ps-sm-4 ps-md-5 ps-lg-6 pe-3 pe-sm-4 pe-md-5 pe-lg-6 bg-success bg-gradient text-white">
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 150,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        touchThreshold: 10,
        swipeToSlide: true,
        initialSlide: offset,
        afterChange(index) {
            onDateChange(dates[index])
        },
    }

    return (
        <Row className="mb-5">
            <Slider ref={slickRef} {...settings}>
                {days}
            </Slider>
        </Row>
    )
}

SliderCalendar.propTypes = {
    onDateChange: PropTypes.func,
    month: PropTypes.number.isRequired,
    disabledDates: PropTypes.arrayOf(PropTypes.Date),
}

SliderCalendar.defaultProps = {
    onDateChange: null,
    disabledDates: [],
}
