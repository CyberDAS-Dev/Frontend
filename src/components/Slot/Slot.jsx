import React from 'react'
import PropTypes from 'prop-types'
import { Col, Button } from 'react-bootstrap'

function formatSlotTime(slotTime) {
    const datetime = slotTime.split('T')
    const time = (datetime.length === 1 ? datetime[0] : datetime[1]).split(':')
    return `${time[0]}:${time[1]}`
}

export default function Slot({ id = 0, size = '', time = '', onClick = null, masked = false }) {
    return (
        <Col className="d-flex justify-content-center align-items-center">
            <Button
                variant="success"
                className="w-100"
                style={{ borderRadius: 0 }}
                id={id}
                size={size} // bootstrap md
                value={formatSlotTime(time)}
                onClick={(event) => onClick(event.target)}
            >
                {masked ? '' : formatSlotTime(time)}
            </Button>
        </Col>
    )
}

Slot.propTypes = {
    id: PropTypes.number,
    size: PropTypes.string,
    onClick: PropTypes.func,
    time: PropTypes.string,
    masked: PropTypes.bool,
}

Slot.defaultProps = {
    id: 0,
    size: '',
    time: '',
    onClick: null,
    masked: false,
}
