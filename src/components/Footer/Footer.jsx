import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from './Link'

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
                                <Link to="/" name="CyberDAS" />
                                <Link external to="https://vk.com/studcomdas" name="Студком ДАСа" />
                            </Col>
                            <Col xs={12} sm={6}>
                                <Link external to="https://das.msk.ru" name="Общежитие ДАС" />
                                <Link
                                    external
                                    to="https://github.com/CyberDAS-Dev"
                                    name="Команда"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} md={5} lg={4}>
                        <Row>
                            <Col xs={12} className="p-3">
                                <h5 className="text-light">ПРОЕКТЫ</h5>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Link to="/" name="Вызов служб" />
                                <Link to="/" name="Личный кабинет" />
                            </Col>
                            <Col xs={12} sm={6}>
                                <Link to="/queue" name="Эл. очередь" />
                                <Link to="/" name="Сейчас в разработке" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} lg={2} />
                </Row>
            </Container>
        </footer>
    )
}
