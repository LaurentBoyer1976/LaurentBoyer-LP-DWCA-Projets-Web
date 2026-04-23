import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';

const AppRouter = () => (
    <Router basename="/S2-UE61-PHP-DB/TP_UE_6_3_1/Phase_2/">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* Fallback : attrape /index.html ou toute URL inconnue et renvoie sur / */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRouter;
