import React, { useState, useEffect } from 'react'
import { Row, Nav } from 'react-bootstrap'
import Page from '@/components/Page/Page'
import FeedbackForm from '@/forms/Feedback'
import FeedbackApi from '@/API/feedback'
import Item from './components/Item'

export default function Feedback() {
    const [recipients, setRecipients] = useState([])
    const [recipient, setRecipient] = useState({})

    useEffect(() => {
        async function FetchApi() {
            const response = await FeedbackApi.getAll()
            setRecipients(response?.data)
            setRecipient(response?.data[0])
        }
        FetchApi()
    }, [])

    function sendRequest(data) {
        FeedbackApi.post(recipient.name, data)
    }

    return (
        <>
            <Page header="Шаг 1. Укажите, кому будет направлен ваш вопрос">
                <Nav
                    variant="pills"
                    className="my-3"
                    activeKey={recipient?.name}
                    onSelect={(eventKey) => {
                        setRecipient(recipients.find((rec) => rec?.name === eventKey))
                    }}
                >
                    <Row className="gx-5 gy-4">
                        {recipients.map((rec) => {
                            return (
                                <Item
                                    title={rec.title}
                                    name={rec.name}
                                    description={rec.description}
                                />
                            )
                        })}
                    </Row>
                </Nav>
            </Page>
            <Page header="Шаг 2. Опишите вопрос">
                <FeedbackForm onSubmit={sendRequest} categories={recipient?.categories} />
            </Page>
        </>
    )
}
