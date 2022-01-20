import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login({ handleChange, submit }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={ submit }>
                Submit
            </Button>
        </Form>
    )
}

export default Login;
