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
                    {/* TODO добавить инструкцию? */}
                    <Alert variant="info">
                        Запись в электронную очередь - это не время, в которое вас будут пускать в
                        общежитие. В общежитие можно приехать в любое время и в любой день, вас
                        поселят. Электронная очередь нужна для оплаты проживания. Оплату можно будет
                        произвести через какое-то время после приезда и поселения в комнату.
                    </Alert>
                    <Row className="gx-5 gy-3 mt-3 mb-1 mt-lg-5 mb-lg-3 justify-content-center">
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
                    <a
                        href="/technical"
                        onClick={(e) => {
                            e.preventDefault()
                            backToSelection()
                        }}
                        className="d-flex align-items-center mb-2"
                    >
                        <ArrowLeft className="me-1" />
                        Назад
                    </a>
                    <TechnicalForm onSubmit={sendRequest} />
                </>
            )}
        </Page>
    )
}
