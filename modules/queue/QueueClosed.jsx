import React from 'react'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import Page from '@/common/components/Page'
import Icon from '@/common/components/Icon'

export default function QueueClosed() {
    return (
        <>
            <Head>
                <title>Заселение - CyberDAS</title>
                <meta property="og:title" content="Заселение - CyberDAS" key="title" />
                <meta
                    name="description"
                    content="Электронная запись в очередь на заселение будет доступна летом следующего года."
                />
                <meta
                    property="og:description"
                    content="Электронная запись в очередь на заселение будет доступна летом следующего года."
                    key="description"
                />
            </Head>
            <Page header="Электронная регистрация на процедуру заселения">
                <Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <Icon name="closed" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="12" lg="10">
                        <h5 className="text-center">
                            Электронная регистрация на заселение недоступна до следующего года.{' '}
                            <br />
                            Возвращайтесь летом!
                        </h5>
                    </Col>
                </Row>
            </Page>
        </>
    )
}
