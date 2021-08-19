import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import s from './SlotList.module.scss'

function datetimeToHM(datetime) {
    return `${datetime.getHours()}:${String(datetime.getMinutes()).padStart(2, '0')}`
}

function addMinutes(dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000)
}

function formatSlotTime(slotTime, duration) {
    const startTime = new Date(slotTime)
    const endTime = addMinutes(startTime, duration)
    return `${datetimeToHM(startTime)} - ${datetimeToHM(endTime)}`
}

export default function SlotList({ slots, duration, className, onClick, freeOnly = true }) {
    let slotItems = []
    if (freeOnly) {
        slotItems = slots.filter((slot) => slot.free)
    } else {
        slotItems = slots
    }
    // Сортируем по времени, а не по айди
    slotItems.sort((a, b) => new Date(a.time) - new Date(b.time))
    const listItems = slotItems.map((slot) => (
        <Row>
            <Col>
                <Button
                    key={slot.id}
                    id={slot.id}
                    value={formatSlotTime(slot.time, duration)}
                    size="lg"
                    onClick={(event) => onClick(event.target)}
                >
                    {formatSlotTime(slot.time, duration)}
                </Button>
            </Col>
        </Row>
    ))
    return (
        <div className={`${s.wrapper} ${className || ''}`}>
            <div className={s.headerRow}>
                <div className={s.headerCol}>Время</div>
            </div>
            <div className={s.column}>{listItems}</div>
        </div>
    )
}
