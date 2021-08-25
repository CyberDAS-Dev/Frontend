import React from 'react'
import ReactCalendar from 'react-calendar'
import './Calendar.module.scss'

export default function Calendar({ show, className, ...args }) {
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
