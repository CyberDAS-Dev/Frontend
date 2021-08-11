import React from 'react'
import { Container } from 'react-bootstrap'
import InputLabelHint from '@/components/InputLabelHint/InputLabelHint'
import Button from '@/components/Button/Button'
import Select from '@/components/Select/Select'
import Checkbox from '@/components/Checkbox/Checkbox'
import s from './Signup.module.scss'

export default function Signup() {
    return (
        <div className={s.background}>
            <Container>
                <h1 className={s.header}>Регистрация</h1>
                <form className={s.form}>
                    <fieldset>
                        <div className={s.info}>
                            <p>
                                Указанные вами данные будут использоваться порталом для
                                автозаполнения форм и ускорения оказания услуг. В случае изменения
                                данных просим оперативно редактировать данные в профиле.
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
                            <InputLabelHint
                                required
                                label="Фамилия:"
                                placeholder="Введите фамилию"
                                name="firstname"
                                className={s.formEl}
                            >
                                Используйте буквы русского алфавита.
                            </InputLabelHint>
                            <InputLabelHint
                                required
                                label="Имя:"
                                placeholder="Введите имя"
                                name="surname"
                                className={s.formEl}
                            >
                                Используйте буквы русского алфавита.
                            </InputLabelHint>
                            <InputLabelHint
                                required
                                label="Отчество:"
                                placeholder="Введите отчество"
                                name="patronymic"
                                className={s.formEl}
                            >
                                Используйте буквы русского алфавита.
                            </InputLabelHint>
                            <InputLabelHint
                                required
                                label="Электронная почта:"
                                placeholder="Введите email"
                                type="email"
                                name="email"
                                className={s.formEl}
                            >
                                На указанный адрес будет выслано письмо с подтверждением
                                регистрации.
                            </InputLabelHint>
                            <Select
                                placeholder="Выберите факультет"
                                label="Факультет:"
                                required
                                hint="Сначала укажите свой факультет."
                                name="faculty"
                                className={s.formEl}
                            >
                                <option value="1">Факультет номер один</option>
                                <option value="2">Факультет два</option>
                            </Select>
                            <p className={s.disclaimer}>
                                <span>*</span> - поля, обязательные для заполнения
                            </p>
                            <Checkbox required name="agreement" className={s.agreement}>
                                Я прочитал и согласен с условиями использования сайта и политикой
                                обработки персональных данных
                            </Checkbox>
                            <Button type="submit">Зарегистрироваться</Button>
                        </div>
                    </fieldset>
                </form>
            </Container>
        </div>
    )
}
