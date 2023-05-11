import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// import StartPage from './pages/StartPage';
// const HomePage = lazy(() => import('./pages/HomePage'));
const StartPage = lazy(() => import('./pages/StartPage'));
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="start" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
