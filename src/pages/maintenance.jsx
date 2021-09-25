import React, { useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import ButtonCard from '../modules/maintenance/components/ButtonCard'
import alert from '@/common/utils/alert'
import MaintenanceForm from '../modules/maintenance/forms/request'
import MaintenanceApi from '../modules/maintenance/api/maintenance'
import OttApi from '@/common/api/ott'
import ContentBox from '../common/components/ContentBox/ContentBox'

export default function Maintenance() {
    const [service, selectService] = useState('electrician')
    function backToSelection() {
        window.scrollTo(0, 0)
    }

    function cardClick(nextService) {
        selectService(nextService)
    }

    async function sendRequest(values) {
        if (
            await MaintenanceApi.post(
                { text: values.text, category: service },
                await OttApi.getToken({
                    email: values.email,
                    surname: values.surname,
                    name: values.name,
                    patronymic: values.patronymic,
                    building: values.building,
                    room: values.room,
                })
            )
        ) {
            backToSelection()
            alert(
                'Вы успешно подали заявку на оказание технических услуг, ожидайте прихода мастера',
                {
                    title: 'Успех!',
                }
            )
        }
    }

    return (
        <Container className="mt-4 mb-5">
            <ContentBox header="Шаг 1. Выберите мастера, к которому будет направлен ваш запрос">
                <Alert variant="info">
                    На этой странице можно оставить заявку на оказание технических услуг. Для этого
                    нужно выбрать желаемую категорию услуги, после заполнить контактную информацию и
                    оставить описание проблемы. Далее останется лишь дождаться прихода мастера.
                </Alert>
                <Alert variant="warning">
                    Заявки с этой страницы отправляются каждый день в 7 часов утра. Если вам срочно
                    нужна помощь - обратитесь к коменданту.
                </Alert>
                <Row className="gy-3" xs={{ cols: 1 }} lg={{ cols: 3 }}>
                    <Col>
                        <ButtonCard
                            heading="Электрик"
                            icon="electrician"
                            service="electrician"
                            onClick={cardClick}
                            currentSerivce={service}
                            scrollTo="#step-2"
                        />
                    </Col>
                    <Col>
                        <ButtonCard
                            heading="Плотник"
                            icon="carpenter"
                            service="carpenter"
                            onClick={cardClick}
                            currentSerivce={service}
                            scrollTo="#step-2"
                        />
                    </Col>
                    <Col className="align-items-center d-flex flex-column">
                        <ButtonCard
                            heading="Сантехник"
                            icon="plumber"
                            service="plumber"
                            onClick={cardClick}
                            currentSerivce={service}
                            scrollTo="#step-2"
                            disabled
                        />
                        <p className="text-muted mb-0">будет доступен позже</p>
                    </Col>
                </Row>
            </ContentBox>
            <ContentBox header="Шаг 2. Опишите проблему" className="mt-4" id="step-2">
                <button
                    onClick={backToSelection}
                    className="d-flex align-items-center mb-2 btn-link border-0 bg-transparent px-0 fs-5"
                    type="button"
                >
                    <ArrowLeft className="me-2" />
                    Назад
                </button>
                <MaintenanceForm onSubmit={sendRequest} />
            </ContentBox>
        </Container>
    )
}
