import React from 'react'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import Icon from '@/common/components/Icon/index'
import Page from '@/common/components/Page/Page'

export default function Copyright() {
    return (
        <>
            <Head>
                <title>Авторство</title>
                <meta property="og:title" content="Авторство" key="title" />
                <meta
                    name="description"
                    content="Страница для указания авторов, чьи работы используются на сайте."
                />
                <meta
                    property="og:description"
                    content="Страница для указания авторов, чьи работы используются на сайте."
                    key="description"
                />
            </Head>
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
                        <a href="https://thenounproject.com/">
                            © Muhammad Khoirul Amal, Noun Project
                        </a>
                    </Col>
                </Row>
            </Page>
        </>
    )
}
