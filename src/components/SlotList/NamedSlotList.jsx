import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import SlotList from '@/components/SlotList/SlotList'

export default function NamedSlotList({
    slots,
    onClick = null,
    noItemsText = 'Нет свободных мест',
    className = '',
    xs = '',
    sm = '',
    md = '',
    lg = '',
    xl = '',
    xxl = '',
}) {
    // Убираем занятые слоты, чтобы выяснить, вдруг свободных вовсе нет
    const slotItems = slots?.filter((slot) => slot.free)

    let toRender
    if (slotItems?.length) {
        toRender = (
            <SlotList
                xs={xs}
                sm={sm}
                md={md}
                lg={lg}
                xl={xl}
                xxl={xxl}
                slots={slots}
                onClick={onClick}
            />
        )
    } else {
        toRender = (
            <Row className="g-2">
                <Col xs="12" className="text-center fs-5">
                    <p>{noItemsText}</p>
                </Col>
            </Row>
        )
    }

    /* 
        Такая сложная структура колонок нужна, потому что у нас еще есть надпись - 
        и она должна быть с нормальными отступами. Для этого на всех должен действовать "g-2".
        Можно было бы разместить и надпись, и слоты в одном <Row className="g-2">, 
        но тогда приходилось бы указывать на самих слотах, сколько места они занимают 
        (а не просто <Row xs={3}>), т.к первая колонка с надписью должна быть больше остальных,
        что было бы не очень модульно  
    */
    return (
        <Row className={`g-2 ${className}`}>
            <Col xs="12" className="text-center">
                <p className="bg-tinted-dark m-0 pt-1 pb-1 fs-5" style={{ color: 'white' }}>
                    Запись
                </p>
            </Col>
            <Col>{toRender}</Col>
        </Row>
    )
}

NamedSlotList.propTypes = {
    slots: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            time: PropTypes.string.isRequired,
            free: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    noItemsText: PropTypes.string,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

NamedSlotList.defaultProps = {
    onClick: null,
    className: '',
    noItemsText: '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: '',
}
