import React, { useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    category: yup.string().required(),
    text: yup.string().required(),
    email: yup.string().email(),
})

export default function FeedbackForm({ onSubmit, categories = [] }) {
    const formik = useFormik({
        validationSchema: schema,
        onSubmit: (values) => {
            formik.resetForm()
            onSubmit(values)
        },
        initialValues: {
            category: '',
            text: '',
            email: '',
        },
    })

    // eslint отключен из-за того, что зависимость формика тут не нужна,
    // а вставить ее не получится, из-за того что формик ререндерится при каждом изменении данных
    useEffect(() => {
        formik.setFieldValue('category', '')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories])

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} lg="4">
                    <Form.Label column="lg">Категория:</Form.Label>
                    <Form.Select
                        type="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.category && !formik.errors.category}
                        isInvalid={formik.touched.category && !!formik.errors.category}
                    >
                        <option id="0" value="" disabled hidden>
                            Выберите категорию
                        </option>
                        {categories.map((category) => {
                            return (
                                <option value={category} id={category}>
                                    {category}
                                </option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} lg="12">
                    <Form.Label column="lg">Суть обращения:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="text"
                        placeholder="Вы можете описать проблему или задать вопрос тут"
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.text && !!formik.errors.text}
                        isValid={formik.touched.text && !formik.errors.text}
                        rows={8}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
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
                    <Form.Text muted>
                        Оставьте вашу электронную почту, если вы хотите получить ответ на обращение.
                    </Form.Text>
                </Form.Group>
            </Row>
            <Form.Group as={Row}>
                <Col xs="12" sm="auto">
                    <Button size="lg" type="submit" className="w-100 w-sm-auto">
                        Отправить
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}
