import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '@/pages/Home/components/Card/Card'
import Button from '@/components/Button/Button'
import s from './Home.module.scss'
import jumbotronLogo from './images/jumbotron-logo.png'
import whiteRem from './images/icons/white/rem.png'
import blueQueen from './images/icons/blue/queue.png'
import whiteSport from './images/icons/white/sport.png'
import blueMusic from './images/icons/blue/music.png'
import whiteForms from './images/icons/white/forms.png'
import blueInfo from './images/icons/blue/info.png'
import blueComingSoon from './images/icons/blue/comingsoon.png'

export default function Homepage() {
    return (
        <div className="homepage">
            <div className={s.jumbotron}>
                <div className={s.jumbotronImgblock}>
                    <div className={s.jumbotronImgblockLayer}>
                        <div className="container">
                            <img src={jumbotronLogo} alt="Jumbotron" />
                            <Link to="/signup">
                                <Button>Регистрация</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <div className="col-auto">
                        <h1 className={s.landingHeading}>Общежитие стало доступнее!</h1>
                    </div>
                </Row>
            </Container>
            <Container className={s.landingBlock}>
                <Row className="row">
                    <div className={`col-12 col-lg-6 ${s.flexLc} ${s.landingCard}`}>
                        <p className={s.landingBigFont}>1</p>
                        <p className={s.landingNormalFont}>Зарегистрируйся на сайте</p>
                    </div>
                    <div className={`col-12 col-lg-6 ${s.flexLc} ${s.landingCard}`}>
                        <p className={s.landingBigFont}>2</p>
                        <p className={s.landingNormalFont}>
                            Получи доступ к электронным услугам не выходя из комнаты
                        </p>
                    </div>
                </Row>
            </Container>
            <Container className={s.landingBlock}>
                <Row className="justify-content-md-center">
                    <div className="col-auto">
                        <h1>Уже запущено:</h1>
                    </div>
                </Row>
            </Container>
            <Container className={s.landingBlock} id="modal">
                <Row>
                    <Card isPrimary order={0} heading="Вызов технических служб" image={whiteRem}>
                        Вызов технических служб
                        <br />
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                    <Card order={1} heading="Вызов технических служб" image={blueQueen}>
                        Вызов технических служб
                        <br />
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                    <Card isPrimary order={3} heading="Вызов технических служб" image={whiteSport}>
                        Вызов технических служб
                        <br />
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                    <Card order={2} heading="Вызов технических служб" image={blueMusic}>
                        Вызов технических служб
                        <br />
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                    <Card isPrimary order={4} heading="Вызов технических служб" image={whiteForms}>
                        Вызов технических служб
                        <br />
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                    <Card order={5} heading="Вызов технических служб" image={blueInfo}>
                        Вызов технических служб
                        <br />
                        Отправь заявку диспетчеру <br />
                        Дождись прихода специалиста
                    </Card>
                </Row>
            </Container>
            <Container className={`container ${s.landingBlock} ${s.comingSoon}`}>
                <div className={`col-12 ${s.flexCc} ${s.card_h1}`}>
                    <h1>И многое другое уже в разработке!</h1>
                </div>
                <div className="row">
                    <div className={`col-3 ${s.flexCc}`}>
                        <img className={s.landingCardImg} src={blueComingSoon} alt="" />
                    </div>
                    <div className={`col-9 ${s.flexCc}`}>
                        <p className={s.landingNormalFont}>
                            Команда разработчиков постоянно работает над улучшением сервиса и
                            добавлением нового функционала.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
