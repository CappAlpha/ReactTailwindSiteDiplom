import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/homepage/HomePage';
import ScrollToTop from './components/ScrollToTop';
const StartPage = lazy(() => import('./pages/startpage/StartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
