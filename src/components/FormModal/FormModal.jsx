import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@/components/Modal/Modal'

const maxId = 10 ** 6

export default function FormModal({ show = true, proceed = () => {}, Form, ...rest }) {
    const formId = Math.floor(Math.random() * maxId)
    return (
        <Modal
            show={show}
            proceed={(bool) => {
                if (bool) {
                    document.getElementById(`${formId}_submit`).click()
                } else {
                    proceed(false)
                }
            }}
            {...rest}
        >
            <Form id={formId} onSubmit={(values) => proceed(values)} />
            <input hidden id={`${formId}_submit`} form={formId} type="submit" />
        </Modal>
    )
}

FormModal.propTypes = {
    proceed: PropTypes.func,
    show: PropTypes.bool,
    Form: PropTypes.elementType.isRequired,
}

FormModal.defaultProps = {
    show: true,
    proceed: () => {},
}
