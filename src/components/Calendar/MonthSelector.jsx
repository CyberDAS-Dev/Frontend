import React from 'react'
import Button from 'react-bootstrap/Button'
import s from './MonthSelector.module.scss'

const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

export default function MonthSelector({ onChange, value, slots, className }) {
    // TODO: нужно еще учитывать год, но на практике редкий случай; доделаю позже.
    const monthsArray = slots.map((slot) => new Date(slot.time).getMonth())
    const uniqueMonths = [...new Set(monthsArray)].sort((a, b) => a - b)

    const formatMonth = (month) => `${monthNames[month]} ${new Date().getFullYear()}`

    const listItems = uniqueMonths.map((month) => (
        <Button
            id={month}
            key={month.toString()}
            className="shadow-none"
            variant={month === value ? 'primary' : 'outline-primary'}
            onClick={(event) => onChange(parseInt(event.target.id, 10))}
        >
            {formatMonth(month)}
        </Button>
    ))

    return (
        <div className={`${s.wrapper} ${className || ''}`}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <h3>Месяц:</h3>
                {listItems}
            </div>
        </div>
    )
}
