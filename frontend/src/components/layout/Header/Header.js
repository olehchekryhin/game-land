import { Link } from "react-router-dom";
import React from "react";

import './Header.scss';

import logo from '../../../assets/images/game_land_logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Header() {
    return (
        <header className="header pt-3 pb-3">
            <Container>
                <Row>
                    <Col xs="1">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="game land"/>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <Nav className='pt-2 pb-2'>
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </header>
    );
}
