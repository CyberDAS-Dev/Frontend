import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import ContentBox from '@/common/components/ContentBox'
import alert from '@/common/utils/alert'
import confirm from '@/common/utils/confirm'
import OttApi from '@/common/api/ott'
import ButtonCard from './components/ButtonCard'
import MaintenanceForm from './forms/request'
import MaintenanceApi from './api/maintenance'

export default function Maintenance() {
    const [service, selectService] = useState('electrician')
    const router = useRouter()

    function backToSelection() {
        router.replace(router.pathname)
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
            if (
                await alert(
                    'Вы успешно подали заявку на оказание технических услуг, ожидайте прихода мастера',
                    {
                        title: 'Успех!',
                    }
                )
            ) {
                backToSelection()
                selectService('electrician')
            }
        }
    }

    async function onSubmit(values) {
        const today = new Date()
        // Нужно предупреждать пользователей о том, что заявки будут отправлены только в понедельник в:
        // 1. Пятницу после 7 утра
        // 2. Субботу
        // 3. Воскресенье до 7 утра
        if (
            (today.getUTCDay() === 5 && today.getUTCHours() >= 4) || // пятница
            today.getUTCDay() === 6 || // суббота
            (today.getUTCDay() === 0 && today.getUTCHours() <= 4) // воскресенье
        ) {
            if (
                await confirm(
                    'Ваша заявка будет отправлена только в понедельник. Вы хотите продолжить?',
                    {
                        title: 'Вы уверены?',
                    }
                )
            ) {
                sendRequest(values)
            }
        } else {
            sendRequest(values)
        }
    }

    return (
        <>
            <Head>
                <title>Техуслуги - CyberDAS</title>
                <meta property="og:title" content="Техуслуги - CyberDAS" key="title" />
                <meta name="description" content="Отправка заявки на оказание технических услуг." />
                <meta
                    property="og:description"
                    content="Отправка заявки на оказание технических услуг."
                    key="description"
                />
            </Head>
            <Container className="mt-4 mb-5">
                <ContentBox header="Шаг 1. Выберите мастера, к которому будет направлен ваш запрос">
                    <Alert variant="info">
                        На этой странице можно оставить заявку на оказание технических услуг. Для
                        этого нужно выбрать желаемую категорию услуги, после заполнить контактную
                        информацию и оставить описание проблемы. Далее останется лишь дождаться
                        прихода мастера.
                    </Alert>
                    <Alert variant="warning">
                        Заявки с этой страницы отправляются в рабочие дни в 7 часов утра. Если вам
                        срочно нужна помощь - обратитесь к дежурному администратору (коменданту).
                    </Alert>
                    <Alert variant="warning">
                        Имущество не принадлежащее управлению общежитиями МГУ не ремонтируется,
                        ремонт производится силами собственников. Оборудование или инвентарь,
                        требующий ремонта, должны быть подготовлены для ремонта, доступ к ним
                        свободен.
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
                    <MaintenanceForm onSubmit={onSubmit} />
                </ContentBox>
            </Container>
        </>
    )
}
