import React from 'react'
import ReactCalendar from 'react-calendar'
import './Calendar.module.scss'

export default function Calendar({ slots, className, ...args }) {
    return (
        <ReactCalendar
            className={`${className || ''}`}
            locale="ru-RU"
            calendarType="ISO 8601"
            {...args}
        />
    )
}
