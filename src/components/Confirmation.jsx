import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { confirmable, createConfirmation } from 'react-confirm'

function Confirmation({
    okLabel = 'OK',
    cancelLabel = 'Отмена',
    title,
    confirmation,
    show,
    proceed,
    enableEscape = true,
}) {
    return (
        <div className="static-modal">
            <Modal
                show={show}
                onHide={() => proceed(false)}
                backdrop={enableEscape ? true : 'static'}
                keyboard={enableEscape}
            >
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{confirmation}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => proceed(false)}>{cancelLabel}</Button>
                    <Button className="button-l" bsStyle="primary" onClick={() => proceed(true)}>
                        {okLabel}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const defaultConfirmation = createConfirmation(confirmable(Confirmation))

export default function confirm(confirmation, options = {}) {
    return defaultConfirmation({ confirmation, ...options })
}
