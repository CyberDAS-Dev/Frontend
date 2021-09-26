import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@/common/components/Modal'

export default function Confirm({
    okLabel,
    cancelLabel,
    title,
    text,
    show,
    proceed,
    enableEscape = true,
}) {
    return (
        <Modal
            title={title}
            show={show}
            enableEscape={enableEscape}
            proceed={proceed}
            okLabel={okLabel}
            cancelLabel={cancelLabel}
        >
            {text}
        </Modal>
    )
}

Confirm.propTypes = {
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    proceed: PropTypes.func,
    title: PropTypes.string,
    show: PropTypes.bool,
    enableEscape: PropTypes.bool,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
}

Confirm.defaultProps = {
    proceed: (bool) => bool,
    title: '',
    show: true,
    enableEscape: true,
    okLabel: 'Далее',
    cancelLabel: 'Назад',
}
