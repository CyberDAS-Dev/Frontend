import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./../../store/auth/slice";
import Container from "react-bootstrap/Container";
import Icon from "./../../components/Icons/Icon";

export default function Login(props) {
    const dispatch = useDispatch();
    const [name, changeName] = useState("");
    const [lastName, changeLastName] = useState("");

    return (
        <div className="login-page">
            <Container>
                <form
                    className="form"
                    onSubmit={() => {
                        props.history.push("/");
                        dispatch(login({ name, lastName }));
                    }}
                >
                    <h2 className="header">ВХОД В ЛИЧНЫЙ КАБИНЕТ</h2>

                    <div className="logo-wrapper" onClick={() => props.history.push("/")}></div>
                    <input
                        required
                        className="cred-input"
                        type="email"
                        placeholder="Введите почту"
                        onChange={(e) => changeName(e.target.value)}
                    ></input>
                    <input
                        required
                        className="cred-input"
                        type="password"
                        placeholder="Введите пароль"
                        onChange={(e) => changeLastName(e.target.value)}
                    ></input>
                    <div className="additional-buttons">
                        <a href="#">
                            <Icon name="textboxPassword" />
                            Забыли пароль?
                        </a>
                        <a href="#">
                            <Icon name="key" />
                            Регистрация
                        </a>
                    </div>
                    <button type="submit" className="submit-button">
                        <p>Вход</p>
                    </button>
                </form>
            </Container>
        </div>
    );
}
