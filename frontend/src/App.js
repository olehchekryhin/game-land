import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAccessToken } from "./redux/auth/auth.selectors";

import './App.css';
import Header from "./components/layout/Header/Header";

import TicTacPage from './pages/TicTacPage';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage";
import { setAccessToken } from "./redux/auth/auth.action";
import { setProfile } from "./redux/user/user.action";

function App() {
    const accessToken = useSelector(getAccessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const userProfile = JSON.parse(localStorage.getItem('profile'));

        if (token) {
            dispatch(setAccessToken(token));
            dispatch(setProfile(userProfile));
        }
    }, [accessToken]);

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/profile" element={!accessToken ? (<Navigate to='/'/>) : (<ProfilePage/>)}/>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/tic-tac" element={<TicTacPage />} />
            <Route exact path="*" element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    );
}

export default App;
