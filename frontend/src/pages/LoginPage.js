import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Container from 'react-bootstrap/Container';
import Login from "../components/login/Login";
import { httpService } from "../services/http.service";

import { setAccessToken } from "../redux/auth/auth.action";
import { setProfile } from "../redux/user/user.action";

function LoginPage () {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [values, setValues] = useState([]);

    const setFormValues = formValues => {
        setValues({ ...values, ...formValues });
    };

    const handleInputChanges = e => {
        e.preventDefault();
        setFormValues({ [e.currentTarget.name]: e.currentTarget.value })
    };

    const submit = async () => {
        const { email, password } = values;
        const body = { username: email, password };

        try {
            const response = JSON.parse(await httpService('POST', 'auth/login', body));
            const { accessToken, user: { _id, email, name, username } } = response;

            if (accessToken) {
                dispatch(setProfile({ id: _id, email, name, username }));
                dispatch(setAccessToken(accessToken));
                navigate("/profile");
            }
        } catch (e) {
            console.log(e);
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
