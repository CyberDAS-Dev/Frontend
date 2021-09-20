import React, { useState } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from './images/header-logo.png'

export default function Header() {
    const [activeKey, setActiveKey] = useState(0)
    /*
     Зачем здесь стейт? <Nav> автоматически помечает текущую активную страницу. 
     То есть, если мы кликнули на `Вход` и находимся на этой странице, то кнопка теперь другого цвета.
     Проблема в том, что между собой <Nav>'ы не синхронизируются и визуально получается так, 
     словно мы можем одновременно быть и на `Вход`е и на `Заселении`
     
     Зачем несколько <Nav>'ов? Нужно было унести кнопку `Вход` подальше направо. Попробуйте сделать это без них.
     Поэтому нужно было добавить стейт для синхронизации навов между собой

     По этой же причине внутри <Navbar.Brand> такая мешанина - если не завернуть внутрь <Navbar.Brand> <Nav.Link>, 
     то не будет возможности ловить момент нажатия на главную и сбрасывать выбор другой страницы с навов.

     NOTE:
     -7 пикселей налево у картинки потому что она отцентрована, а должна быть прибита к левому краю (на телефонах)
    */
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="nav"
            variant="dark"
            onSelect={(eventKey) => setActiveKey(eventKey)}
        >
            <Container>
                <Navbar.Brand>
                    <LinkContainer exact to="/">
                        <Nav.Link className="p-0" eventKey="0">
                            <img
                                style={{ marginLeft: '-7px' }}
                                src={logo}
                                className="d-inline-block align-top"
                                alt="CyberDAS"
                            />
                        </Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" activeKey={activeKey}>
                        <LinkContainer exact to="/queue">
                            <Nav.Link eventKey="1">Заселение</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/technical">
                            <Nav.Link eventKey="2">Технические услуги</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav hidden activeKey={activeKey}>
                        <LinkContainer exact to="/login" activeKey={activeKey}>
                            <Nav.Link eventKey="3">Вход</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
