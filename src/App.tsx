import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from 'pages/welcome-page';
import { CryptoPage } from 'pages/crypto-page';

function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/crypto" element={<CryptoPage />} />
        </Routes>
    );
}

export default App;
