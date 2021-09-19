import React, { useState, useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import Page from '@/components/Page/Page'
import ButtonCard from './components/ButtonCard'
import alert from '@/utils/alert'
import TechnicalForm from '@/forms/Techical'

import electrician from './icons/electrician.png'
import plumber from './icons/plumber.png'
import carpenter from './icons/carpenter.png'

export default function Technical() {
    const [service, selectService] = useState(null)

    const isServiceSelected = service !== null

    useEffect(() => window.scrollTo(0, 0), [service])

    function backToSelection() {
        selectService(null)
    }

    function sendRequest(values) {
        backToSelection()
        alert('Вы успешно подали заявку на оказание технических услуг, ожидайте прихода мастера', {
            title: 'Успех!',
        })
        console.log({ ...values, service })
        // TODO if feedbackApi.post({ ...values, service }) {...}
    }

    return (
        <Page header="Электронная запись на оказание технических услуг">
            {!isServiceSelected ? (
                <>
                    <Alert variant="info">
                        На этой странице можно оставить заявку на оказание технических услуг. Для
                        этого нужно выбрать желаемую категорию услуги, после заполнить контактную
                        информацию и оставить описание проблемы. Далее останется лишь дождаться
                        прихода мастера.
                    </Alert>
                    <Alert variant="warning">
                        Заявки с этой страницы отправляются каждый день в 8 часов утра. Если вам
                        срочно нужна помощь - обратитесь к коменданту.
                    </Alert>
                    <Row className="gx-5 gy-3 mt-3 mb-3 justify-content-center">
                        <Col md={8} lg={3}>
                            <ButtonCard
                                heading="Электрик"
                                icon={electrician}
                                service="electrician"
                                onClick={selectService}
                            />
                        </Col>
                        <Col md={8} lg={3}>
                            <ButtonCard
                                heading="Сантехник"
                                icon={plumber}
                                service="plumber"
                                onClick={selectService}
                            />
                        </Col>
                        <Col md={8} lg={3}>
                            <ButtonCard
                                heading="Плотник"
                                icon={carpenter}
                                service="carpenter"
                                onClick={selectService}
                            />
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                    <button
                        onClick={backToSelection}
                        className="d-flex align-items-center mb-2 btn-link border-0 bg-transparent px-0 fs-5"
                        type="button"
                    >
                        <ArrowLeft className="me-2" />
                        Назад
                    </button>
                    <TechnicalForm onSubmit={sendRequest} />
                </>
            )}
        </Page>
    )
}
