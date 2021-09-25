import React, { useState } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import Img from 'next/image'
import logo from '@/../public/images/header-logo.png'

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
                    <Link href="/" passHref>
                        <Nav.Link
                            className="p-0 align-items-center d-flex"
                            eventKey="0"
                            style={{ marginLeft: '-7px' }}
                        >
                            <Img layout="fixed" quality={100} src={logo} alt="CyberDAS" />
                        </Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" activeKey={activeKey}>
                        <Link href="/queue" passHref>
                            <Nav.Link eventKey="1">Заселение</Nav.Link>
                        </Link>
                        <Link href="/technical" passHref>
                            <Nav.Link eventKey="2">Технические услуги</Nav.Link>
                        </Link>
                        <Link href="/feedback" passHref>
                            <Nav.Link eventKey="3">Обратная связь</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav hidden activeKey={activeKey}>
                        <Link href="/login" passHref>
                            <Nav.Link eventKey="3">Вход</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
