import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Technical.css'

const schema = yup.object().shape({
    surname: yup.string().required(),
    name: yup.string().required(),
    patronymic: yup.string(),
    building: yup.number().required().oneOf([1, 2]),
    room: yup.number().required().integer().positive(),
    text: yup.string().required(),
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
            building: '',
            room: '',
            text: '',
        },
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Form.Group as={Col} lg="4">
                    <Form.Label column="lg">Электронная почта:</Form.Label>
                    <Form.Control
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
                <Form.Group as={Col} lg="4" controlId="validationFormik01">
                    <Form.Label column="lg">Фамилия:</Form.Label>
                    <Form.Control
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
                <Form.Group as={Col} lg="4" controlId="validationFormik02">
                    <Form.Label column="lg">Имя:</Form.Label>
                    <Form.Control
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
                <Form.Group as={Col} lg="4">
                    <Form.Label column="lg">Отчество:</Form.Label>
                    <Form.Control
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
                <Form.Group as={Col} xs="6" lg="2" xxl="1">
                    <Form.Label column="lg">Корпус:</Form.Label>
                    <Form.Control
                        type="number"
                        name="building"
                        value={formik.values.building}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.building && !!formik.errors.building}
                        isValid={formik.touched.building && !formik.errors.building}
                    />
                </Form.Group>
                <Form.Group as={Col} xs="6" lg="2" xxl="2">
                    <Form.Label column="lg">Комната:</Form.Label>
                    <Form.Control
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
                <Form.Group as={Col} lg="12">
                    <Form.Label column="lg">Описание проблемы:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="text"
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.text && !!formik.errors.text}
                        isValid={formik.touched.text && !formik.errors.text}
                        rows={8}
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
                <Col xs="12" sm="auto">
                    <Button size="lg" type="submit" className="w-100 w-sm-auto">
                        Отправить
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}
