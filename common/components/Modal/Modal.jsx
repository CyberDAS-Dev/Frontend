import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import ContentBox from '@/common/components/ContentBox'
import s from './Modal.module.scss'

export default function CustomModal({
    children,
    proceed = (bool) => bool,
    title = '',
    size = '',
    show = true,
    centered = false,
    enableEscape = true,
    okLabel = 'Далее',
    cancelLabel = 'Назад',
    closable = true,
    noCancel = false,
    footer = null,
}) {
    return (
        <div className={`static-modal ${s.wrapper}`}>
            <Modal
                show={show}
                size={size}
                centered={centered}
                onHide={() => proceed(false)}
                backdrop={enableEscape ? true : 'static'}
                keyboard={enableEscape}
            >
                <ContentBox closable={closable} onClose={() => proceed(false)} header={title}>
                    {children}
                </ContentBox>
                <Modal.Footer className="justify-content-center">
                    {footer !== null ? (
                        <Row className="w-100">{footer}</Row>
                    ) : (
                        <Row className="w-100">
                            {noCancel || (
                                <Button
                                    as={Col}
                                    xs={{ span: 5, offset: 0 }}
                                    sm={{ span: 4, offset: 0 }}
                                    size=""
                                    onClick={() => proceed(false)}
                                >
                                    {cancelLabel}
                                </Button>
                            )}
                            <Button
                                as={Col}
                                xs={{ span: 5, offset: noCancel ? 7 : 2 }}
                                sm={{ span: 4, offset: noCancel ? 8 : 4 }}
                                size=""
                                onClick={() => proceed(true)}
                            >
                                {okLabel}
                            </Button>
                        </Row>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

CustomModal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    proceed: PropTypes.func,
    title: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg', 'xl', '']),
    show: PropTypes.bool,
    centered: PropTypes.bool,
    enableEscape: PropTypes.bool,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    closable: PropTypes.bool,
    noCancel: PropTypes.bool,
    footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

CustomModal.defaultProps = {
    proceed: (bool) => bool,
    title: '',
    size: '',
    show: true,
    centered: false,
    enableEscape: true,
    okLabel: 'Далее',
    cancelLabel: 'Назад',
    closable: true,
    noCancel: false,
    footer: null,
}
