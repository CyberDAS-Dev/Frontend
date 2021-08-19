import React from 'react'
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '@/store/auth/slice'
import s from './Header.module.scss'
import logo from './images/header-logo.png'

export default function Header() {
    const dispatch = useDispatch()
    const { isAuth, name } = useSelector((state) => state.auth)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} className="d-inline-block align-top" alt="CyberDAS" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <div className={s.headerLeft}>
                            <Link to="/">
                                <div className={s.headerButton}>
                                    <p>Каталог</p>
                                </div>
                            </Link>
                            <div className={s.headerButton}>
                                <Link to="/">
                                    <p>Информация</p>
                                </Link>
                            </div>
                            <div className={s.headerButton}>
                                <Link to="/queue">
                                    <p>Заселение</p>
                                </Link>
                            </div>
                        </div>
                    </Nav>
                    <Nav>
                        {' '}
                        {isAuth ? (
                            <NavDropdown title={name} id="collasible-nav-dropdown">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Профиль</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => dispatch(logout())}>
                                    Выход
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to="/login">
                                <div className={s.headerButton}>
                                    <p>Вход</p>
                                </div>
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
