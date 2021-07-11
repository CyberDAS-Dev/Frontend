import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <div className="col-md-1 col-lg-2"></div>
                    <div className="col-6 col-md-5 col-lg-4">
                        <Row>
                            <div className="col-12 p-3">
                                <h5>О НАС</h5>
                            </div>
                            <div className="col-12 col-sm-6">
                                <Link to="/">
                                    <p className="text-subheader">CyberDas</p>
                                </Link>
                                <Link to="/">
                                    <p className="text-subheader">Студком ДАСа</p>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-6">
                                <Link to="/">
                                    <p className="text-subheader">Общежитие ДАС</p>
                                </Link>
                                <Link to="/">
                                    <p className="text-subheader">Команда</p>
                                </Link>
                            </div>
                        </Row>
                    </div>
                    <div className="col-6 col-md-5 col-lg-4">
                        <Row>
                            <div className="col-12 p-3">
                                <h5>ПРОЕКТЫ</h5>
                            </div>
                            <div className="col-12 col-sm-6">
                                <Link to="/">
                                    <p className="text-subheader">Вызов служб</p>
                                </Link>
                                <Link to="/">
                                    <p className="text-subheader">Личный кабинет</p>
                                </Link>
                            </div>
                            <div className="col-12 col-sm-6">
                                <Link to="/">
                                    <p className="text-subheader">Эл. очередь</p>
                                </Link>
                                <Link to="/">
                                    <p className="text-subheader">Сейчас в разработке</p>
                                </Link>
                            </div>
                        </Row>
                    </div>
                    <div className="col-md-1 col-lg-2"></div>
                </Row>
            </Container>
        </footer>
    );
}
