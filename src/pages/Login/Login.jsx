import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Button from '@components/Button/Button'
import { login } from '@store/auth/slice'
import Icon from '../../components/Icon'
import s from './Login.module.scss'

export default function Login(props) {
    const dispatch = useDispatch()
    const [name, changeName] = useState('')
    const [lastName, changeLastName] = useState('')

    return (
        <div className={s.loginPage}>
            <Container>
                <form
                    className={s.form}
                    onSubmit={() => {
                        props.history.push('/')
                        dispatch(login({ name, lastName }))
                    }}
                >
                    <h2 className={s.header}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</h2>

                    <button
                        type="button"
                        label="Переход на главную"
                        className={s.logoWrapper}
                        onClick={() => props.history.push('/')}
                    />
                    <input
                        required
                        className={s.credInput}
                        type="email"
                        placeholder="Введите почту"
                        onChange={(e) => changeName(e.target.value)}
                    />
                    <input
                        required
                        className={s.credInput}
                        type="password"
                        placeholder="Введите пароль"
                        onChange={(e) => changeLastName(e.target.value)}
                    />
                    <div className={s.additionalButtons}>
                        <a href="/">
                            <Icon name="textboxPassword" />
                            Забыли пароль?
                        </a>
                        <a href="/">
                            <Icon name="key" />
                            Регистрация
                        </a>
                    </div>
                    <Button type="submit">Вход</Button>
                </form>
            </Container>
        </div>
    )
}
