import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLink from './FooterLink'

export default function Footer() {
    // mt-auto нужно для прибития футера вниз страницы
    return (
        <footer className="bg-nav pt-4 pb-4 mt-auto">
            <Container>
                <Row className="text-center justify-content-md-center">
                    <Col
                        xs={{ order: 1, span: 6 }}
                        md={{ order: 1, span: 'auto' }}
                        className="mb-3 mb-md-0"
                    >
                        <FooterLink to="https://vk.com/studcomdas" name="Студком" external />
                    </Col>
                    <Col
                        xs={{ order: 2, span: 6 }}
                        md={{ order: 3, span: 'auto' }}
                        className="mb-3 mb-md-0"
                    >
                        <FooterLink to="https://das.msk.ru/" name="Общежитие ДАС" external />
                    </Col>
                    <Col xs={{ order: 'last', span: 12 }} md={{ order: 3, span: 'auto' }}>
                        <a href="https://github.com/CyberDAS-Dev" className="link-secondary">
                            © 2021 «CyberDAS-Dev»
                        </a>
                    </Col>
                    <Col
                        xs={{ order: 3, span: 6 }}
                        md={{ order: 4, span: 'auto' }}
                        className="mb-3 mb-md-0"
                    >
                        <FooterLink to="/privacy" name="Защита данных" />
                    </Col>
                    <Col
                        xs={{ order: 4, span: 6 }}
                        md={{ order: 5, span: 'auto' }}
                        className="mb-3 mb-md-0"
                    >
                        <FooterLink to="/agreement" name="Соглашение" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
