import { useEffect } from "react";
import {httpService} from "../services/http.service";
import Container from 'react-bootstrap/Container';

function ProfilePage() {
    useEffect(async () => {
        const profile = await httpService('GET', 'profile', null, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });
    });

    return (
        <div className="profile">
            <Container>
                <h1>Profile page</h1>
            </Container>
        </div>
    )
}

export default ProfilePage;
