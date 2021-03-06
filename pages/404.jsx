import React from 'react'
import Head from 'next/head'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'

import useMediaQuery from '@/common/hooks/useMediaQuery'

export default function NotFoundPage() {
    const isBreakpoint = useMediaQuery(576)
    return (
        <>
            <Head>
                <title>Не найдено</title>
                <meta property="og:title" content="Не найдено" key="title" />
            </Head>
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
                        <Link href="/" passHref>
                            <Button size={isBreakpoint ? `` : 'lg'}>Вернуться на главную</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
