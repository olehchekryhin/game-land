import { Link } from "react-router-dom";
import React from "react";

import './Header.scss';

import logo from '../../../assets/images/game_land_logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Header() {
    const accessToken = localStorage.getItem('access_token');

    const logout = () => {
        localStorage.removeItem('access_token');
    };

    return (
        <header className="header pt-3 pb-3">
            <Container>
                <Row className="align-items-center">
                    <Col xs="2">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="game land"/>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Nav className='pt-2 pb-2'>
                                    <Nav.Item>
                                        <Link to="/">Home</Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col>
                                {
                                    !accessToken
                                        ? <Nav className='pt-2 pb-2 justify-content-end'>
                                            <Nav.Item className="px-4">
                                                <Link to="/sign-up">Sign up</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="/login">Login</Link>
                                            </Nav.Item>
                                         </Nav>
                                        : <Nav className='pt-2 pb-2 justify-content-end'>
                                            <Nav.Item>
                                                <Link to="/profile">Profile</Link>
                                            </Nav.Item>
                                            <Nav.Item className="px-4">
                                                <Button className="p-0 align-top" variant="link" onClick={logout}>Log out</Button>
                                            </Nav.Item>
                                        </Nav>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </header>
    );
}
