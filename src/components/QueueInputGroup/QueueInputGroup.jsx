import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import MonthSelector from '@/components/MonthSelector/MonthSelector'
import SlotCalendar from '@/components/SlotCalendar/SlotCalendar'
import NamedSlotList from '@/components/SlotList/NamedSlotList'
import {
    toObject,
    toDate,
    toDatetime,
    earliestAvailableInMonth,
    fromDatetime,
} from '@/utils/dateLib'

export default function QueueInputGroup({
    show = true,
    slotMatrix,
    dailyClasses,
    disabledDates = [],
    onSlotClick = () => {},
    getNoItemsText = () => {},
}) {
    // Если пользователь переключился на сегодняшний день, но он уже закрыт или
    // (скользкий момент) длина disabledDates нулевая, что говорит о том что
    // массив еще не подгрузился, то мы переносим его на следующий день
    const correctDay = (nextValue) => {
        if (
            toDatetime(nextValue) === toDatetime(new Date()) &&
            (disabledDates.includes(toDatetime(new Date())) || disabledDates.length === 0)
        ) {
            return new Date(new Date().setDate(nextValue.getDate() + 1))
        }
        return new Date(nextValue)
    }

    const [date, setDate] = useState(correctDay(new Date()))
    const months = Object.keys(dailyClasses).map((element) =>
        element.split('-').slice(0, 2).join('-')
    )
    const uniqueMonths = [...new Set(months)].map((element) => toObject(element))

    const onDateChange = (nextValue) => setDate(correctDay(nextValue))
    const onMonthChange = (nextValue) =>
        onDateChange(fromDatetime(earliestAvailableInMonth(nextValue.year, nextValue.month)))

    if (show) {
        return (
            <div>
                <Row xs={1} lg={2}>
                    <Col>
                        <MonthSelector
                            xs={2}
                            lg={4}
                            className="mb-3"
                            current={toObject(toDate(date, true))}
                            dates={uniqueMonths}
                            onChange={onMonthChange}
                        />
                    </Col>
                    <Col />
                </Row>
                <Row xs={1} lg={2}>
                    <Col>
                        <SlotCalendar
                            className="mb-3"
                            onChange={onDateChange}
                            value={date}
                            dailyClasses={dailyClasses}
                            disabledDates={disabledDates}
                        />
                    </Col>
                    <Col>
                        <NamedSlotList
                            xs={3}
                            lg={4}
                            slots={slotMatrix[toDatetime(date)]}
                            onClick={onSlotClick}
                            noItemsText={getNoItemsText(date)}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

    return ''
}

QueueInputGroup.propTypes = {
    show: PropTypes.bool,
    slotMatrix: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                time: PropTypes.string.isRequired,
                free: PropTypes.bool.isRequired,
            })
        )
    ).isRequired,
    dailyClasses: PropTypes.objectOf(PropTypes.string).isRequired,
    disabledDates: PropTypes.arrayOf(PropTypes.string),
    onSlotClick: PropTypes.func,
    getNoItemsText: PropTypes.func,
}

QueueInputGroup.defaultProps = {
    show: true,
    disabledDates: [],
    onSlotClick: () => {},
    getNoItemsText: () => {},
    className: '',
}
