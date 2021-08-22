import React from 'react'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import s from './Signup.module.scss'

export default function Signup() {
    return (
        <div className={s.background}>
            <Container>
                <h1 className={s.header}>Регистрация</h1>
                <Form className={s.form} onSubmit={() => {}}>
                    <div className={s.info}>
                        <p>
                            Указанные вами данные будут использоваться порталом для автозаполнения
                            форм и ускорения оказания услуг. В случае изменения данных просим
                            оперативно редактировать данные в профиле.
                        </p>
                        <p>
                            Для получения полного доступа к услугам необходимо пройти процедуру
                            подтверждения личности после регистрации в разделе “мой профиль”.
                        </p>
                    </div>
                    <h2>
                        Личные данные
                        <span />
                    </h2>
                    <div className={s.internalWrapper}>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label column="lg">
                                    Фамилия:<span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    name="surname"
                                    placeholder="Введите фамилию"
                                />
                                <Form.Text muted>Используйте буквы русского алфавита</Form.Text>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label column="lg">
                                    Имя:<span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    name="name"
                                    placeholder="Введите имя"
                                />
                                <Form.Text muted>Используйте буквы русского алфавита</Form.Text>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label column="lg">Отчество:</Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    name="patronymic"
                                    placeholder="Введите отчество"
                                />
                                <Form.Text muted>Используйте буквы русского алфавита</Form.Text>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label column="lg">
                                    Электронная почта:<span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="email"
                                    name="email"
                                    placeholder="Введите адрес почты"
                                />
                                <Form.Text muted>
                                    На указанный адрес будет выслано письмо с подтверждением
                                    регистрации
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label column="lg">
                                    Факультет:<span style={{ color: 'red' }}>*</span>
                                </Form.Label>
                                <Form.Select size="lg">
                                    <option disabled selected hidden>
                                        Выберите факультет
                                    </option>
                                    <option value="1">Факультет 1</option>
                                    <option value="2">Факультет 2</option>
                                </Form.Select>
                                <Form.Text muted>Сначала укажите свой факультет</Form.Text>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                                <span style={{ color: 'red' }}>*</span> - поля, обязательные для
                                заполнения
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                                <Form.Check
                                    label="Я прочитал и согласен с условиями использования сайта и политикой обработки персональных данных"
                                    type="checkbox"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Button type="submit">Зарегистрироваться</Button>
                            </Form.Group>
                        </Row>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
