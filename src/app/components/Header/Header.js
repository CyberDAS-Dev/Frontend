import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
    const { isAuth, name } = useSelector((state) => state.auth);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src="/images/header-logo.png"
                            className="d-inline-block align-top"
                            alt="CyberDAS"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="header-left">
                            <a href="/">
                                <div className="header-button">
                                    <p>Каталог</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="header-button">
                                    <p>Информация</p>
                                </div>
                            </a>
                        </div>
                    </Nav>
                    <Nav>
                        {" "}
                        {isAuth ? (
                            <NavDropdown title={name} id="collasible-nav-dropdown">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Профиль</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Выход</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to="/login">
                                <div className="header-button">
                                    <p>Вход</p>
                                </div>
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
