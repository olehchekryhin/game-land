import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import React from "react";

function NotFound() {
    return (
        <div>
            <Container>
                <h1>Not found</h1>
                <Link to="/">Go home page</Link>
            </Container>
        </div>
    )
}

export default NotFound;
