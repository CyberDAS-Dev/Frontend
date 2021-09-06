import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Technical.css'

const schema = yup.object().shape({
    surname: yup.string().required(),
    name: yup.string().required(),
    patronymic: yup.string(),
    corpus: yup.number().required().nullable(),
    room: yup.number().required(),
    description: yup.string().required(),
    email: yup.string().email().required(),
})

export default function TechnicalForm({ onSubmit }) {
    const formik = useFormik({
        validationSchema: schema,
        onSubmit: (values) => onSubmit(values),
        initialValues: {
            surname: '',
            name: '',
            patronymic: '',
            email: '',
            corpus: '',
            room: '',
            description: '',
        },
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Form.Group as={Col} lg="3">
                    <Form.Label column="lg">Электронная почта:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="email"
                        name="email"
                        placeholder="Введите адрес почты"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        isValid={formik.touched.email && !formik.errors.email}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} lg="3" controlId="validationFormik01">
                    <Form.Label column="lg">Фамилия:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        name="surname"
                        placeholder="Введите фамилию"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.surname && !!formik.errors.surname}
                        isValid={formik.touched.surname && !formik.errors.surname}
                    />
                </Form.Group>
                <Form.Group as={Col} lg="3" controlId="validationFormik02">
                    <Form.Label column="lg">Имя:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        name="name"
                        placeholder="Введите имя"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                        isValid={formik.touched.name && !formik.errors.name}
                    />
                </Form.Group>
                <Form.Group as={Col} lg="3">
                    <Form.Label column="lg">Отчество:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        name="patronymic"
                        placeholder="Введите отчество"
                        value={formik.values.patronymic}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.patronymic && !!formik.errors.patronymic}
                        isValid={formik.touched.patronymic && !formik.errors.patronymic}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} xs="6" lg="3" xxl="1">
                    <Form.Label column="lg">Корпус:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="number"
                        name="corpus"
                        value={formik.values.corpus}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.corpus && !!formik.errors.corpus}
                        isValid={formik.touched.corpus && !formik.errors.corpus}
                    />
                </Form.Group>
                <Form.Group as={Col} xs="6" lg="3" xxl="2">
                    <Form.Label column="lg">Комната:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="number"
                        name="room"
                        value={formik.values.room}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.room && !!formik.errors.room}
                        isValid={formik.touched.room && !formik.errors.room}
                    />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} lg="6">
                    <Form.Label column="lg">Описание проблемы:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.description && !!formik.errors.description}
                        isValid={formik.touched.description && !formik.errors.description}
                        style={{ height: '200px' }}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <p className="my-3">
                        {' '}
                        Нажимая кнопку Отправить, вы принимаете <a href="/agreement">
                            условия
                        </a> и <a href="/privacy">политику обработки данных</a>
                    </p>
                </Col>
            </Row>
            <Form.Group as={Row} className="mb-3">
                <Col>
                    <Button size="lg" type="submit">
                        Отправить
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}
