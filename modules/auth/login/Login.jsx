import React from 'react'
import { Container, Button, Form, Row, Col, Image, Card } from 'react-bootstrap'
import LinkContainer from '@/common/components/LinkContainer'
import Icon from '@/common/components/Icon'
import s from './Login.module.scss'
import logo from './images/logo-white.png'

export default function Login() {
    return (
        <div className={s.loginPage}>
            <Container>
                <Form onSubmit={() => {}}>
                    <Row className="justify-content-center mb-3">
                        <Card as={Col} md="10" bg="primary" border="primary">
                            <Col
                                md="12"
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Image src={logo} />
                            </Col>
                        </Card>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Control type="email" name="email" placeholder="Введите почту" />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Col xs="auto">
                            <LinkContainer href="/signup">
                                <Icon name="key" />
                                Регистрация
                            </LinkContainer>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Button as={Col} xs="8" md="2" type="submit">
                            Вход
                        </Button>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
