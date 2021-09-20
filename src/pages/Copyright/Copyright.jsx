import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Icon from '../../components/Icon/index'
import Page from '../../components/Page/Page'

export default function Copyright() {
    return (
        <Page header="Авторство">
            <Row xs={{ cols: '1' }} md={{ cols: '3' }}>
                <Col className="d-flex flex-column align-items-center">
                    <Icon name="electrician" />
                    <a href="https://thenounproject.com/">© Made, Noun Project</a>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                    <Icon name="plumber" />
                    <a href="https://thenounproject.com/">© barurezeki, Noun Project</a>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                    <Icon name="carpenter" />
                    <a href="https://thenounproject.com/">© Muhammad Khoirul Amal, Noun Project</a>
                </Col>
            </Row>
        </Page>
    )
}
