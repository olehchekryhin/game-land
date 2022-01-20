import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp({ handleChange, submit }) {
    return (
        <div className="sing-up">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your user name" name="username" onChange={handleChange}/>
                </Form.Group>
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
        </div>
    )
}

export default SignUp;
