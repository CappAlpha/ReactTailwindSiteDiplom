import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// import StartPage from './pages/StartPage';
// const HomePage = lazy(() => import('./pages/HomePage'));
const StartPage = lazy(() => import('./pages/StartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="start" element={<StartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
