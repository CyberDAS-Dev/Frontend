import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { confirmable, createConfirmation } from 'react-confirm'

function Alert({ okLabel = 'OK', title, text, show, proceed, enableEscape = true }) {
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
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>
                    <Button className="button-l" bsStyle="primary" onClick={() => proceed(true)}>
                        {okLabel}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const defaultAlert = createConfirmation(confirmable(Alert))

export default function alert(text, options = {}) {
    return defaultAlert({ text, ...options })
}
