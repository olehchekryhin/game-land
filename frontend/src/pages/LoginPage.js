import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Login from "../components/login/Login";
import { httpService } from "../services/http.service";

function LoginPage () {
    let navigate = useNavigate();
    const [values, setValues] = useState([]);

    const setFormValues = (formValues) => {
        setValues({...values, ...formValues});
    };

    const handleInputChanges = (e) => {
        e.preventDefault();
        setFormValues({ [e.currentTarget.name]: e.currentTarget.value })
    };

    const submit = async () => {
        const { email, password } = values;
        const body = {
            email, password
        };

        try {
            const response = await httpService('POST', 'auth/login', body);
            localStorage.setItem('access_token', JSON.parse(response).access_token);
            navigate("/profile");
        } catch (e) {

        }
    };

    return(
        <div className="login-page">
            <Container>
                <h1>Login page</h1>
                <Login handleChange={handleInputChanges} submit={submit}/>
            </Container>
        </div>
    )
}

export default LoginPage;
