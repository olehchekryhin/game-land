import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/layout/Header/Header";

import TicTacPage from './pages/TicTacPage';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

function App() {
    const [accessToken] = useState(localStorage.getItem('access_token'));

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
            {
                accessToken ? <Route path="/profile" element={<ProfilePage />} /> : null
            }
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/tic-tac" element={<TicTacPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
);
}

export default App;
