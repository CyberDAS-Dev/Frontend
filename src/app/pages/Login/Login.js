import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./../../store/auth/slice";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Login() {
    const dispatch = useDispatch();
    const [name, changeName] = useState("");
    const [lastName, changeLastName] = useState("");

    return (
        <div className="loginPage">
            <Container>
                <Link to="/">Главная</Link>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => changeName(e.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => changeLastName(e.target.value)}
                ></input>
                <button onClick={() => dispatch(login({ name, lastName }))}></button>
            </Container>
        </div>
    );
}
