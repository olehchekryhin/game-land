import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import TicTacPage from './pages/TicTacPage';
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header/Header";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tic-tac" element={<TicTacPage />} />
        </Routes>
      </div>
  );
}

export default App;
