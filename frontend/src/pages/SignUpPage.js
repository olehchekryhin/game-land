import { useState } from "react";
import Container from 'react-bootstrap/Container';
import SignUp from '../components/sign-up/SignUp';
import { httpService } from '../services/http.service';

function SignUpPage() {
    const [values, setValues] = useState([]);

    const setFormValues = (formValues) => {
        setValues({...values, ...formValues});
    };

    const handleInputChanges = (e) => {
        e.preventDefault();
        setFormValues({ [e.currentTarget.name]: e.currentTarget.value })
    };

    const submit = async () => {
        const { name, username, email, password } = values;
        const body = {
            name, username, email, password
        };

        try {
            const response = await httpService('POST', 'api/user', body);
            console.log(response);
        } catch (e) {

        }
        console.log('Submit', values);
    };

    return (
        <div className="sign-up">
            <Container>
                <h1>Sign Up</h1>
                <SignUp handleChange={ handleInputChanges } submit={ submit }/>
            </Container>
        </div>
    )
}

export default SignUpPage;
