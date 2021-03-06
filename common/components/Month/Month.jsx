import React from 'react'
import PropTypes from 'prop-types'
import { Col, Button } from 'react-bootstrap'
import s from './Month.module.scss'

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

const formatDate = (date, noYear) => {
    if (noYear) {
        return `${monthNames[date.month]}`
    }
    return `${monthNames[date.month]} ${date.year}`
}

export default function Month({ date, variant = '', onClick = null, noYear = false }) {
    return (
        <Col className="d-flex justify-content-center">
            <Button
                className={`${s.wrapper} h-100`}
                id={`${date.year}-${date.month}`}
                variant={variant}
                onClick={(event) =>
                    onClick({
                        month: parseInt(event.target.id.split('-')[1], 10),
                        year: parseInt(event.target.id.split('-')[0], 10),
                    })
                }
            >
                {formatDate(date, noYear)}
            </Button>
        </Col>
    )
}

Month.propTypes = {
    variant: PropTypes.string,
    date: PropTypes.shape({ year: PropTypes.number, month: PropTypes.number }).isRequired,
    onClick: PropTypes.func,
    noYear: PropTypes.bool,
}

Month.defaultProps = {
    variant: '',
    onClick: null,
    noYear: false,
}
