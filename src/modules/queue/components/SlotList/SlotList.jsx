import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import Slot from '@/modules/queue/components/Slot/Slot'
import useWindowDimensions from '@/hooks/useWindowDimensions'

export default function SlotList({
    slots,
    onClick = null,
    className = '',
    xs = '',
    sm = '',
    md = '',
    lg = '',
    xl = '',
    xxl = '',
}) {
    const { width } = useWindowDimensions()

    // Убираем занятые слоты
    const slotItems = slots.filter((slot) => slot.free)
    // Сортируем их по времени, а не по айди
    slotItems.sort((a, b) => new Date(a.time) - new Date(b.time))

    const listItems = slotItems.map((slot) => (
        <Slot
            key={slot.id}
            id={slot.id}
            time={slot.time}
            onClick={onClick}
            size={width >= 768 ? 'lg' : ''} // bootstrap md
        />
    ))

    return (
        <Row className={`g-2 ${className}`} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
            {listItems}
        </Row>
    )
}

SlotList.propTypes = {
    slots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            time: PropTypes.string.isRequired,
            free: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

SlotList.defaultProps = {
    onClick: null,
    className: '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: '',
}
