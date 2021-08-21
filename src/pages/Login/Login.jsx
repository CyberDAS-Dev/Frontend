import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Button from '@/components/Button/Button'
import { login } from '@/store/auth/slice'
import Icon from '@/components/Icon'
import Input from '@/components/Input/Input'
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
                    <Link className={s.logoWrapper} to="/" />
                    <Input
                        type="email"
                        placeholder="Введите почту"
                        className={s.credInput}
                        onChange={(e) => changeName(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        className={s.credInput}
                        onChange={(e) => changeLastName(e.target.value)}
                    />
                    <div className={s.additionalButtons}>
                        <a href="/">
                            <Icon name="textboxPassword" />
                            Забыли пароль?
                        </a>
                        <Link to="/signup">
                            <Icon name="key" />
                            Регистрация
                        </Link>
                    </div>
                    <Button type="submit">Вход</Button>
                </form>
            </Container>
        </div>
    )
}
