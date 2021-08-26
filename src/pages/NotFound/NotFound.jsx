import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import useWindowDimensions from '@/hooks/useWindowDimensions'

export default function NotFoundPage() {
    const { width } = useWindowDimensions()
    return (
        <Container
            className="d-flex justify-content-center align-items-center text-center"
            style={{ height: '80vh' }}
        >
            <Row className="mb-0" xs={1}>
                <Col style={{ marginBottom: '-1rem' }}>
                    <h1 className="display-1">404</h1>
                </Col>
                <Col>
                    <h4 className="display-4">Страница не найдена</h4>
                </Col>
                <Col className="mt-4">
                    <LinkContainer exact to="/">
                        <Button size={width < 576 ? `` : 'lg'}>Вернуться на главную</Button>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    )
}
