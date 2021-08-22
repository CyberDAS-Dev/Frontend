import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-nav pt-3 pb-3">
            <Container>
                <Row>
                    <Col md={1} lg={2} />
                    <Col xs={6} md={5} lg={4}>
                        <Row>
                            <Col xs={12} className="p-3">
                                <h5 className="text-light">О НАС</h5>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Link to="/" className="link-primary p-1 mb-1 d-block">
                                    <small>CyberDAS</small>
                                </Link>
                                <a
                                    href="https://vk.com/studcomdas"
                                    className="link-primary p-1 mb-1 d-block"
                                >
                                    <small>Студком ДАСа</small>
                                </a>
                            </Col>
                            <Col xs={12} sm={6}>
                                <a
                                    href="https://das.msk.ru"
                                    className="link-primary p-1 mb-1 d-block"
                                >
                                    <small>Общежитие ДАС</small>
                                </a>
                                <a
                                    href="https://github.com/CyberDAS-Dev"
                                    className="link-primary p-1 mb-1 d-block"
                                >
                                    <small>Команда</small>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} md={5} lg={4}>
                        <Row>
                            <Col xs={12} className="p-3">
                                <h5 className="text-light">ПРОЕКТЫ</h5>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Link to="/" className="link-primary p-1 mb-1 d-block">
                                    <small>Вызов служб</small>
                                </Link>
                                <Link to="/" className="link-primary p-1 mb-1 d-block">
                                    <small>Личный кабинет</small>
                                </Link>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Link to="/queue" className="link-primary p-1 mb-1 d-block">
                                    <small>Эл. очередь</small>
                                </Link>
                                <Link to="/" className="link-primary p-1 mb-1 d-block">
                                    <small>Сейчас в разработке</small>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} lg={2} />
                </Row>
            </Container>
        </footer>
    )
}
