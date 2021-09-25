import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import MonthSelector from '@/common/components/MonthSelector/MonthSelector'
import SlotCalendar from '@/modules/queue/components/SlotCalendar/SlotCalendar'
import SliderCalendar from '@/modules/queue/components/SliderCalendar/SliderCalendar'
import NamedSlotList from '@/modules/queue/components/SlotList/NamedSlotList'
import { toObject, toDate, toDatetime } from '@/common/utils/dateLib'
import useMediaQuery from '@/common/hooks/useMediaQuery'

const today = new Date()
const getInitialDay = (disabledDates) => {
    if (disabledDates.includes(toDatetime(today))) {
        return new Date(new Date().setDate(today.getDate() + 1))
    }
    return new Date()
}

export default function QueueInputGroup({
    show = true,
    slotMatrix,
    dailyClasses,
    disabledDates = [],
    onSlotClick = () => {},
    getNoItemsText = () => {},
}) {
    const isBreakpoint = useMediaQuery(768)
    const [date, setDate] = useState(new Date())
    const months = Object.keys(dailyClasses).map((element) =>
        element.split('-').slice(0, 2).join('-')
    )
    const uniqueMonths = [...new Set(months)]
        .map((element) => toObject(element))
        .filter((value) => value.month >= new Date().getMonth())

    /* 
        При инициализации компонента нам нужно проставить начальную дату, при этом 
        это не всегда будет сегодняшная дата (т.к она может быть в disabledDates), 
        поэтому `new Date()` внутри useState не сработает. Сайд эффект от этого -
        при смене факультете будет меняться выбранный день
    */
    useEffect(() => {
        setDate(getInitialDay(disabledDates))
    }, [disabledDates])

    const onDateChange = (nextValue) => setDate(nextValue)
    const onMonthChange = (nextValue) => {
        let earliestDay
        if (nextValue.month === today.getMonth()) {
            earliestDay = getInitialDay(disabledDates)
        } else {
            earliestDay = new Date(nextValue.year, nextValue.month, 1)
        }
        onDateChange(earliestDay)
    }

    const Calendar = isBreakpoint ? SliderCalendar : SlotCalendar

    if (show) {
        return (
            <div>
                <Row xs={1} lg={2}>
                    <Col>
                        <MonthSelector
                            xs={2}
                            sm={3}
                            md={4}
                            xxl={6}
                            className="mb-3 justify-content-center justify-content-md-start"
                            current={toObject(toDate(date, true))}
                            dates={uniqueMonths}
                            onChange={onMonthChange}
                            noYear
                        />
                    </Col>
                    <Col />
                </Row>
                <Row xs={1} lg={2} className="position-relative">
                    <Col>
                        <Calendar
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
