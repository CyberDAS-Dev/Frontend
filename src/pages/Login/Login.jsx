import React from 'react'
import { Container, Button, Form, Row, Col, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import s from './Login.module.scss'
import logo from './images/logo-white.png'

export default function Login() {
    return (
        <div className={s.loginPage}>
            <Container>
                <Form onSubmit={() => {}}>
                    <Row className="justify-content-center" style={{ backgroundImage: logo }}>
                        <Card
                            as={Col}
                            md="10"
                            bg="primary"
                            border="primary"
                            style={{ marginBottom: '1rem' }}
                        >
                            <Row className="justify-content-center" style={{ padding: '0.5rem' }}>
                                <Image src={logo} />
                            </Row>
                        </Card>
                    </Row>
                    <Row className="justify-content-center">
                        <Form.Group as={Col} md="6">
                            <Form.Control type="email" name="email" placeholder="Введите почту" />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-center">
                        <Form.Group as={Col} md="6">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-center">
                        <Link style={{ marginBottom: '1rem' }} to="/signup">
                            <Icon name="key" />
                            Регистрация
                        </Link>
                    </Row>
                    <Row className="justify-content-center">
                        <Button type="submit">Вход</Button>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
