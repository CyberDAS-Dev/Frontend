import React, { useState } from 'react'
import { Card, Col, Row, Nav } from 'react-bootstrap'
import { ExclamationDiamond, QuestionOctagon } from 'react-bootstrap-icons'
import Page from '@/components/Page/Page'
import FeedbackAdminForm from '@/forms/FeedbackAdmin'
import FeedbackCommitteeForm from '@/forms/FeedbackCommittee'

export default function Feedback() {
    const [receiver, setReceiver] = useState('admin')

    // TODO temp
    function onSubmit(v) {
        console.log(v)
    }

    return (
        <>
            <Page header="Шаг 1. Укажите, кому будет направлен ваш вопрос">
                <Nav
                    variant="pills"
                    className="my-3"
                    activeKey={receiver}
                    onSelect={(eventKey) => setReceiver(eventKey)}
                >
                    <Row className="justify-content-center gx-5 gy-4">
                        <Col xs="12" md="10" lg="6">
                            <Nav.Item>
                                <Nav.Link eventKey="admin">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title
                                            className="d-inline-flex justify-content-center"
                                            style={{ fontWeight: 400 }}
                                        >
                                            Администрация сайта
                                        </Card.Title>
                                        <Card.Text style={{ fontWeight: 300 }}>
                                            <Row className="align-items-center">
                                                <Col
                                                    xs="12"
                                                    md="8"
                                                    className="d-inline-flex justify-content-center d-md-block mb-2 mb-md-0"
                                                >
                                                    Ошибки, возникшие при работе с сайтом, а также
                                                    пожелания и предложения по его модернизации
                                                </Col>
                                                <Col
                                                    xs="12"
                                                    md="4"
                                                    className="d-inline-flex justify-content-center"
                                                >
                                                    <ExclamationDiamond size={128} />
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col xs="12" md="10" lg="6">
                            <Nav.Item>
                                <Nav.Link eventKey="committee">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title
                                            className="d-inline-flex justify-content-center"
                                            style={{ fontWeight: 400 }}
                                        >
                                            Студенческий комитет
                                        </Card.Title>
                                        <Card.Text style={{ fontWeight: 300 }}>
                                            <Row className="align-items-center">
                                                <Col
                                                    xs="12"
                                                    md="8"
                                                    className="d-inline-flex justify-content-center d-md-block mb-2 mb-md-0"
                                                >
                                                    Здесь вы можете указать проблемы, возникшие при
                                                    проживании в общежитии или задать интересующий
                                                    вас вопрос
                                                </Col>
                                                <Col
                                                    xs="12"
                                                    md="4"
                                                    className="d-inline-flex justify-content-center"
                                                >
                                                    <QuestionOctagon size={128} />
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Nav>
            </Page>
            <Page
                header={`Шаг 2. Опишите вопрос ${
                    (receiver === 'admin' && 'к администрации') ||
                    (receiver === 'committee' && 'к студенческому комитету')
                }`}
            >
                {/* TODO этот костыль (придумали древние укры)  надо поправить, можно сделать все в 1 форме, но надо как-то ресетить прошлую */}
                {receiver === 'admin' && <FeedbackAdminForm onSubmit={onSubmit} />}
                {receiver === 'committee' && <FeedbackCommitteeForm onSubmit={onSubmit} />}
            </Page>
        </>
    )
}
