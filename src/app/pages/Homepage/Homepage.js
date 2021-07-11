import React from "react";
import jumbotronLogo from "./images/jumbotron-logo.png";
import { Container, Row } from "react-bootstrap";
import whiteRem from "./images/icons/white/rem.png";
import blueQueen from "./images/icons/blue/queue.png";
import whiteSport from "./images/icons/white/sport.png";
import blueMusic from "./images/icons/blue/music.png";
import whiteForms from "./images/icons/white/forms.png";
import blueInfo from "./images/icons/blue/info.png";
import blueComingSoon from "./images/icons/blue/comingsoon.png";

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="jumbotron">
                <div className="jumbotron-imgblock">
                    <div className="jumbotron-imgblock-layer">
                        <div className="container">
                            <img src={jumbotronLogo} alt="Jumbotron" />
                            <button className="button button-primary">
                                <h3>Регистрация</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <div className="col-auto">
                        <h1 className="landing-heading">
                            Общежитее стало доступнее!
                        </h1>
                    </div>
                </Row>
            </Container>
            <Container className="landing-block">
                <Row className="row">
                    <div className="col-12 col-lg-6 flex-lc landing-card">
                        <p className="landing-big-font">1</p>
                        <p className="landing-normal-font">
                            Зарегистрируйся на сайте
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 flex-lc landing-card">
                        <p className="landing-big-font">2</p>
                        <p className="landing-normal-font">
                            Получи доступ к электронным услугам не выходя из
                            комнаты
                        </p>
                    </div>
                </Row>
            </Container>
            <Container className="landing-block">
                <Row className="justify-content-md-center">
                    <div className="col-auto">
                        <h1>Уже запущено:</h1>
                    </div>
                </Row>
            </Container>
            <Container className="landing-block" id="modal">
                <Row>
                    <div className="col-12 col-lg-6 order-lg-0">
                        <div className="landing-card card-primary">
                            <div className="row flex-cc card-h3">
                                <h3 className="text-light">
                                    Вызов технических служб
                                </h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img
                                        className="landing-card-img"
                                        src={whiteRem}
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="text-large text-light text-right">
                                        Опиши проблему
                                        <br />
                                        Отправь заявку диспетчеру <br />
                                        Дождись прихода специалиста
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-1">
                        <div className="landing-card">
                            <div className="row flex-cc card-h3">
                                <h3>Вызов технических служб</h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img
                                        className="landing-card-img"
                                        src={blueQueen}
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="text-large text-right">
                                        Опиши проблему
                                        <br />
                                        Отправь заявку диспетчеру <br />
                                        Дождись прихода специалиста
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-3">
                        <div className="landing-card card-primary">
                            <div className="row flex-cc card-h3">
                                <h3 className="text-light">
                                    Вызов технических служб
                                </h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img
                                        className="landing-card-img"
                                        src={whiteSport}
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="text-large text-light text-right">
                                        Опиши проблему
                                        <br />
                                        Отправь заявку диспетчеру <br />
                                        Дождись прихода специалиста
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-2">
                        <div className="landing-card">
                            <div className="row flex-cc card-h3">
                                <h3>Вызов технических служб</h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img
                                        className="landing-card-img"
                                        src={blueMusic}
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="text-large text-right">
                                        Опиши проблему
                                        <br />
                                        Отправь заявку диспетчеру <br />
                                        Дождись прихода специалиста
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-4">
                        <div className="landing-card card-primary">
                            <div className="row flex-cc card-h3">
                                <h3 className="text-light">
                                    Вызов технических служб
                                </h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img
                                        className="landing-card-img"
                                        src={whiteForms}
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="text-large text-light text-right">
                                        Опиши проблему
                                        <br />
                                        Отправь заявку диспетчеру <br />
                                        Дождись прихода специалиста
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-5">
                        <div className="landing-card">
                            <div className="row flex-cc card-h3">
                                <h3>Вызов технических служб</h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img
                                        className="landing-card-img"
                                        src={blueInfo}
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="text-large text-right">
                                        Опиши проблему
                                        <br />
                                        Отправь заявку диспетчеру <br />
                                        Дождись прихода специалиста
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container className="container landing-block comingsoon">
                <div className="col-12 flex-cc card-h1">
                    <h1>И многое другое уже в разработке!</h1>
                </div>
                <div className="row">
                    <div className="col-3 flex-cc">
                        <img
                            className="landing-card-img"
                            src={blueComingSoon}
                        />
                    </div>
                    <div className="col-9 flex-cc">
                        <p className="landing-normal-font">
                            Команда разработчиков постоянно работает над
                            улучшением сервиса и добавлением нового функционала.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
