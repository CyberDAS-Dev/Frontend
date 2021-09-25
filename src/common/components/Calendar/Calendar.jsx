import React from 'react'
import PropTypes from 'prop-types'
import ReactCalendar from 'react-calendar'
import s from './Calendar.module.scss'

export default function Calendar({ show = true, className = '', ...args }) {
    if (show) {
        return (
            <div className={s.wrapper}>
                <ReactCalendar
                    className={`${className || ''}`}
                    locale="ru-RU"
                    calendarType="ISO 8601"
                    {...args}
                />
            </div>
        )
    }

    return ''
}

Calendar.propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
}

Calendar.defaultProps = {
    show: true,
    className: '',
}
