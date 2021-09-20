import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLink from './FooterLink'

export default function Footer() {
    // mt-auto нужно для прибития футера вниз страницы
    return (
        <footer className="bg-nav pt-4 pb-4 mt-auto">
            <Container>
                <Row className="text-center justify-content-md-center gy-2">
                    <Col
                        xs={{ order: 1, span: 6 }}
                        md={{ order: 1, span: 12 }}
                        xl={{ order: 1, span: 'auto' }}
                    >
                        <Row
                            xs={{ cols: 1 }}
                            md={{ cols: 6 }}
                            xl={{ cols: 'auto' }}
                            className="justify-content-between h-100 gy-2"
                        >
                            <Col>
                                <FooterLink
                                    to="https://vk.com/studcomdas"
                                    name="Студком"
                                    external
                                />
                            </Col>
                            <Col>
                                <FooterLink
                                    to="https://das.msk.ru/"
                                    name="Общежитие ДАС"
                                    external
                                />
                            </Col>
                            <Col>
                                <FooterLink to="/feedback" name="Обратная связь" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ order: 'last', span: 12 }} xl={{ order: 2, span: 'auto' }}>
                        <Row xs={{ cols: 1 }} className="gy-2">
                            <Col>
                                <a
                                    href="https://github.com/CyberDAS-Dev"
                                    className="link-secondary"
                                >
                                    © 2021 «CyberDAS-Dev»
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        xs={{ order: 2, span: 6 }}
                        md={{ order: 2, span: 12 }}
                        xl={{ order: 3, span: 'auto' }}
                    >
                        <Row
                            xs={{ cols: 1 }}
                            md={{ cols: 6 }}
                            xl={{ cols: 'auto' }}
                            className="justify-content-between h-100 gy-2"
                        >
                            <Col>
                                <FooterLink to="/privacy" name="Защита данных" />
                            </Col>
                            <Col>
                                <FooterLink to="/agreement" name="Соглашение" />
                            </Col>
                            <Col>
                                <FooterLink to="/copyright" name="Авторство" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
