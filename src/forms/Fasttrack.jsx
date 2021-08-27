import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Form, Row, Col } from 'react-bootstrap'

const schema = yup.object().shape({
    surname: yup.string().required(),
    name: yup.string().required(),
    patronymic: yup.string(),
    email: yup.string().email().required(),
    course: yup.number().required(),
    terms: yup.bool().required().oneOf([true], 'Вы должны принять условия пользования'),
})

export default function FasttrackForm({ id, onSubmit }) {
    const formik = useFormik({
        validationSchema: schema,
        onSubmit: (values) => onSubmit(values),
        initialValues: {
            surname: '',
            name: '',
            patronymic: '',
            email: '',
            course: '',
            terms: false,
        },
    })
    return (
        <Form id={id} onSubmit={formik.handleSubmit}>
            <Row>
                <Col>Ваше ФИО будет передано администрации для составления пофамильных списков</Col>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="validationFormik01">
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
            </Row>
            <Row>
                <Form.Group as={Col} controlId="validationFormik02">
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
            </Row>
            <Row>
                <Form.Group as={Col}>
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
                    <Form.Text muted>Если у вас нет отчества, оставьте поле пустым</Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col}>
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
                    <Form.Text muted>
                        На указанный адрес будет выслано письмо с копией талона
                    </Form.Text>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column="lg">Курс обучения:</Form.Label>
                    <Form.Select
                        type="course"
                        name="course"
                        value={formik.values.course}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.course && !formik.errors.course}
                        isInvalid={formik.touched.course && !!formik.errors.course}
                    >
                        <option id="0" value="" disabled hidden>
                            Выберите курс
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
                    <Form.Text muted>Магистранты первого года считаются первокурсниками</Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="12">
                    <Form.Check
                        id="validationFormik0"
                        name="terms"
                        type="checkbox"
                        label={
                            <>
                                Я прочитал и согласен с{' '}
                                <a href="/agreement">условиями пользования сайта</a> и{' '}
                                <a href="/privacy">политикой обработки персональных данных</a>
                            </>
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.terms && !!formik.errors.terms}
                        feedback={formik.errors.terms}
                    />
                </Form.Group>
            </Row>
        </Form>
    )
}
