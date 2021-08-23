import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@/components/Modal/Modal'

export default function Alert({ okLabel, title, text, show, proceed, enableEscape = true }) {
    return (
        <Modal
            title={title}
            show={show}
            enableEscape={enableEscape}
            proceed={proceed}
            okLabel={okLabel}
            noCancel
        >
            {text}
        </Modal>
    )
}

Alert.propTypes = {
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    proceed: PropTypes.func,
    title: PropTypes.string,
    show: PropTypes.bool,
    enableEscape: PropTypes.bool,
    okLabel: PropTypes.string,
}

Alert.defaultProps = {
    proceed: (bool) => bool,
    title: '',
    show: true,
    enableEscape: true,
    okLabel: 'Далее',
}
