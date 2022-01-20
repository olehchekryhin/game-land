import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
    return (
        <div>
            <Container>
                <h1>Select game</h1>
                <Row>
                    <Col xs="4">
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="tic-tac">Tic Tac</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;
