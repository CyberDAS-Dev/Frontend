import React from 'react'
import Img from 'next/image'
import { Row, Col, Card } from 'react-bootstrap'

export default function LandingCard({ isPrimary, heading, order, children, image }) {
    return (
        <Col xs="12" lg="6" className={order ? `order-lg-${order}` : ''}>
            <Card bg={isPrimary ? 'primary' : 'light'} text={isPrimary ? 'white' : ''}>
                <Card.Body className="d-flex flex-column">
                    <Card.Title
                        className="d-inline-flex justify-content-center"
                        style={{ fontWeight: 400 }}
                    >
                        {heading}
                    </Card.Title>
                    <Card.Text style={{ fontWeight: 300 }}>
                        <Row className="align-items-center">
                            <Col
                                xs="12"
                                md="8"
                                className="d-inline-flex justify-content-center d-md-block mb-2 mb-md-0"
                            >
                                {children}
                            </Col>
                            <Col xs="12" md="4" className="d-inline-flex justify-content-center">
                                <Img src={image} />
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
