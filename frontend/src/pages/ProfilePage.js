import {useEffect, useState} from "react";
import { useSelector } from "react-redux";

import { httpService } from "../services/http.service";

import { getAccessToken } from "../redux/auth/auth.selectors";

import Statistics from "../components/statistics/statistics";
import Container from 'react-bootstrap/Container';

function ProfilePage() {
    const [ s, setStatistics ] = useState([]);
    const accessToken = useSelector(getAccessToken);
    const { id } = useSelector(state => state.user.profile);

    useEffect(async () => {
        const profile = await httpService('GET', `api/game/profile/${id}`, null, { Authorization: `Bearer ${accessToken}` });
        setStatistics(JSON.parse(profile));
    }, [accessToken]);

    return (
        <div className="profile">
            <Container>
                <h1>Profile page</h1>
                <Statistics statistics={s}/>
            </Container>
        </div>
    )
}

export default ProfilePage;
