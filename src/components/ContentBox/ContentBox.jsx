import React from 'react'
import PropTypes from 'prop-types'
import { Card, CloseButton } from 'react-bootstrap'
import s from './ContentBox.module.scss'

export default function ContentBox({
    className = '',
    show = true,
    hidden = false,
    header = '',
    children,
    closable = false,
    onClose = null,
}) {
    if (show) {
        return (
            <Card className={`${s.wrapper} ${className}`}>
                <Card.Header className="d-flex">
                    <h5 className={`mb-1 ps-1 pt-1 ${hidden ? 'text-muted' : ''}`}>{header}</h5>
                    {closable ? <CloseButton className="ms-auto" onClick={onClose} /> : ''}
                </Card.Header>
                {hidden ? '' : <Card.Body>{children}</Card.Body>}
            </Card>
        )
    }

    return ''
}

ContentBox.propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    hidden: PropTypes.bool,
    header: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
}

ContentBox.defaultProps = {
    className: '',
    show: true,
    hidden: false,
    header: '',
    closable: false,
    onClose: null,
}
