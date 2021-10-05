import React, { useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import ContentBox from '@/common/components/ContentBox'
import alert from '@/common/utils/alert'
import Item from './components/Item'
import FeedbackForm from './forms/submit'
import FeedbackApi from './api/feedback'

function getRecipientObj(recipient, recipients) {
    const obj = recipients.find((rec) => rec.name === recipient)
    return obj
}

export default function Feedback({ recipients }) {
    const [recipient, setRecipient] = useState(recipients[0].name)

    async function sendRequest(values) {
        const data = { category: values.category, text: values.text }
        if (values.email) data.email = values.email

        if (await FeedbackApi.post(getRecipientObj(recipient, recipients)?.name, data)) {
            alert('Вы успешно отправили свой запрос', {
                title: 'Успех!',
            })
        }
    }

    return (
        <Container className="mt-4 mb-5">
            <ContentBox header="Шаг 1. Выберите, кому будет направлен ваш вопрос">
                <Row
                    className="gy-3"
                    xs={{ cols: '1' }}
                    md={{ cols: (recipients.length <= 2 && recipients.length) || 1 }}
                    lg={{ cols: (recipients.length <= 3 && recipients.length) || 2 }}
                >
                    {recipients.map((rec) => {
                        return (
                            <Item
                                key={rec.name}
                                title={rec.title}
                                name={rec.name}
                                description={rec.description}
                                onClick={setRecipient}
                                isActive={recipient === rec.name}
                            />
                        )
                    })}
                </Row>
            </ContentBox>
            <ContentBox header="Шаг 2. Опишите вопрос" className="mt-4">
                <FeedbackForm
                    onSubmit={sendRequest}
                    categories={getRecipientObj(recipient, recipients)?.categories || []}
                />
            </ContentBox>
        </Container>
    )
}
