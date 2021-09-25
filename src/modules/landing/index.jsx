import React from 'react'
import Img from 'next/image'
import { Container, Row, Col, Button } from 'react-bootstrap'
import LinkContainer from '@/common/components/LinkContainer/LinkContainer'
// import { useHistory, useLocation } from 'react-router-dom'
// import ghostRouting from '@/routes/ghostRouting'
// import useQuery from '@/hooks/useQuery'
import Card from './components/Card/Card'
import jumbologo from './images/jumbotron-logo.png'
import whiteRem from './images/icons/white/rem.png'
import blueQueen from './images/icons/blue/queue.png'
import whiteSport from './images/icons/white/sport.png'
import blueMusic from './images/icons/blue/music.png'
import whiteForms from './images/icons/white/forms.png'
import blueInfo from './images/icons/blue/info.png'
import blueComingSoon from './images/icons/blue/comingsoon.png'
import s from './Landing.module.scss'

export default function Homepage() {
    // ghostRouting(useLocation(), useQuery(), useHistory())

    return (
        <Container fluid className="p-0">
            <Container fluid className={`p-0 mb-6 d-flex align-items-center ${s.jumboBg}`}>
                <Container>
                    <Row className="pt-5 pb-5">
                        <Col lg={{ span: 6, offset: 1 }}>
                            <Img src={jumbologo} />
                        </Col>
                    </Row>
                    <Row className="pt-5 pb-5">
                        <LinkContainer href="/queue">
                            <Button
                                as={Col}
                                xs={{ span: 6, offset: 3 }}
                                md={{ span: 3, offset: 8 }}
                                size="lg"
                            >
                                Заселение
                            </Button>
                        </LinkContainer>
                    </Row>
                </Container>
            </Container>
            <Container className="mb-6">
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <h1 className="display-5 text-center">Общежитие стало доступнее!</h1>
                    </Col>
                </Row>
                <Row md={2} className="g-4">
                    <Col xs="12" lg="6" className="d-inline-flex align-items-center">
                        <span className={s.landingNumbers}>1</span>
                        <span className="lead fs-4">Зарегистрируйся на сайте</span>
                    </Col>
                    <Col xs="12" lg="6" className="d-inline-flex align-items-center">
                        <span className={s.landingNumbers}>2</span>
                        <span className="lead fs-4">
                            Получи доступ к электронным услугам не выходя из комнаты
                        </span>
                    </Col>
                </Row>
            </Container>
            <Container className="mb-6">
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <h1 className="display-6 text-center">Будет запущено:</h1>
                    </Col>
                </Row>
                <Row md={2} className="g-4">
                    <Card order={0} isPrimary heading="Вызов технических служб" image={whiteRem}>
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                    <Card order={1} heading="Электронная очередь" image={blueQueen}>
                        Выбери удобные дату и время
                        <br />
                        Продли пропуск без очередей и ожидания
                    </Card>
                    <Card order={3} isPrimary heading="Запись в спортзал" image={whiteSport}>
                        Запишись на удобное время
                        <br />
                        Занимайся спортом один или с друзьями
                    </Card>
                    <Card order={2} heading="Запись в муз. комнату" image={blueMusic}>
                        Запишись на удобное время
                        <br />
                        Занимайся творчеством
                    </Card>
                    <Card order={4} isPrimary heading="Формы заявлений" image={whiteForms}>
                        Заполни информацию в своем профиле
                        <br />
                        Скачивай с сервера уже заполненные документы
                    </Card>
                    <Card order={5} heading="Информация" image={blueInfo}>
                        Выбери интересующий кабинет из списка
                        <br />
                        Узнай всю актуальную информацию о режиме его работы
                    </Card>
                </Row>
            </Container>
            <Container className="mb-6">
                <Row className="justify-content-center mb-4">
                    <Col xs="auto">
                        <h1 className="display-6 text-center">И многое другое!</h1>
                    </Col>
                </Row>
                <Row md={2} className="g-4">
                    <Col xs="12" md="3" className="d-inline-flex justify-content-center">
                        <Img src={blueComingSoon} layout="fixed" />
                    </Col>
                    <Col xs="12" md="9" className="d-inline-flex justify-content-center">
                        <p className="lead">
                            Команда разработчиков постоянно работает над улучшением сервиса и
                            добавлением нового функционала. Если вы хотите помочь нам, то пишите на{' '}
                            <a href="mailto:support@cyberdas.net">support@cyberdas.net</a> или
                            присоединяйтесь к{' '}
                            <a href="https://github.com/CyberDAS-Dev/"> проекту на GitHub</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
