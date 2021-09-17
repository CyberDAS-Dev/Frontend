import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    category: yup.string().required(),
    description: yup.string().required(),
})

export default function FeedbackAdminForm({ onSubmit }) {
    const formik = useFormik({
        validationSchema: schema,
        onSubmit: (values) => onSubmit(values),
        initialValues: {
            category: '',
            description: '',
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} lg="6">
                    <Form.Label column="lg">Курс обучения:</Form.Label>
                    <Form.Select
                        size="lg"
                        type="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.course && !formik.errors.course}
                        isInvalid={formik.touched.course && !!formik.errors.course}
                    >
                        <option id="0" value="" disabled hidden>
                            Выберите категорию
                        </option>
                        <option id="1" value="1">
                            1
                        </option>
                        <option id="2" value="2">
                            2
                        </option>
                        <option id="3" value="3">
                            3
                        </option>
                        <option id="4" value="4">
                            4
                        </option>
                        <option id="5" value="5">
                            5
                        </option>
                        <option id="6" value="6">
                            6
                        </option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} lg="8">
                    <Form.Label column="lg">Суть обращения:</Form.Label>
                    <Form.Control
                        size="lg"
                        as="textarea"
                        name="description"
                        placeholder="Вы можете описать вашу проблемы или задать вопрос тут"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.description && !!formik.errors.description}
                        isValid={formik.touched.description && !formik.errors.description}
                        rows={8}
                    />
                </Form.Group>
            </Row>
            <Form.Group as={Row} className="my-3">
                <Col>
                    <Button size="lg" type="submit">
                        Отправить
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}
