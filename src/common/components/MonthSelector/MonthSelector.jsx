import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import Month from '@/components/Month/Month'

export default function MonthSelector({
    onChange = null,
    current,
    dates,
    className = '',
    noYear = false,
    xs = '',
    sm = '',
    md = '',
    lg = '',
    xl = '',
    xxl = '',
}) {
    const sortedDates = dates.sort((a, b) => a.year - b.year || a.month - b.month)

    const listItems = sortedDates.map((date) => (
        <Month
            key={`${date.year}-${date.month}`}
            date={date}
            variant={
                date.year === current.year && date.month === current.month
                    ? 'primary'
                    : 'outline-primary'
            }
            onClick={onChange}
            noYear={noYear}
        />
    ))

    return (
        <Row className={`g-2 ${className}`} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
            {listItems}
        </Row>
    )
}

MonthSelector.propTypes = {
    current: PropTypes.shape({ year: PropTypes.number, month: PropTypes.number }).isRequired,
    dates: PropTypes.arrayOf(PropTypes.shape({ year: PropTypes.number, month: PropTypes.number }))
        .isRequired,
    onChange: PropTypes.func,
    className: PropTypes.string,
    noYear: propTypes.bool,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

MonthSelector.defaultProps = {
    onChange: null,
    className: '',
    noYear: false,
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: '',
}
