import React from 'react'
import Head from 'next/head'
import { Alert, Col, Row } from 'react-bootstrap'
import Img from 'next/image'
import Page from '@/common/components/Page'
import closed from './images/closed.svg'

export default function QueueClosed() {
    return (
        <>
            <Head>
                <title>Заселение - CyberDAS</title>
                <meta property="og:title" content="Заселение - CyberDAS" key="title" />
                <meta
                    name="description"
                    content="Электронная запись в очередь на заселение будет летом следующего года."
                />
                <meta
                    property="og:description"
                    content="Электронная запись в очередь на заселение будет летом следующего года."
                    key="description"
                />
            </Head>
            <Page header="Электронная регистрация на процедуру заселения">
                <Row className="justify-content-center mb-3">
                    <Col xs="5" md="3" lg="2">
                        <Img src={closed} layout="responsive" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="12" lg="10">
                        <h5 className="text-center">
                            В этом году процедура заселения закончилась, запись будет открыта в
                            следующем году. <br />
                            Возвращайтесь летом
                        </h5>
                    </Col>
                </Row>
            </Page>
        </>
    )
}
