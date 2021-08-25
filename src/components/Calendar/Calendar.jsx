import React from 'react'
import PropTypes from 'prop-types'
import ReactCalendar from 'react-calendar'
import './Calendar.module.scss'

export default function Calendar({ show = true, className = '', ...args }) {
    if (show) {
        return (
            <ReactCalendar
                className={`${className || ''}`}
                locale="ru-RU"
                calendarType="ISO 8601"
                {...args}
            />
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
