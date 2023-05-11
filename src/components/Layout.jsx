import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
