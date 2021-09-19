import React from 'react'
import { Card, Col, Row, Nav } from 'react-bootstrap'

export default function Item({ title, name, description }) {
    return (
        <Col xs="12" md="10" lg="6">
            <Nav.Item className="h-100">
                <Nav.Link eventKey={name} className="h-100">
                    <Card.Body className="d-flex flex-column">
                        <Card.Title
                            className="d-inline-flex justify-content-center"
                            style={{ fontWeight: 400 }}
                        >
                            {title}
                        </Card.Title>
                        <Card.Text style={{ fontWeight: 300 }}>
                            <Row className="align-items-center justify-content-center">
                                <Col
                                    xs="12"
                                    md="10"
                                    className="d-inline-flex d-md-block mb-2 mb-md-0"
                                >
                                    {description}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Nav.Link>
            </Nav.Item>
        </Col>
    )
}
