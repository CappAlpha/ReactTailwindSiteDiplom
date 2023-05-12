import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[700px] sm:px-0 px-12 bg-primary min-h-screen">
            <h3 className="text-white font-bold text-[42px] font-poppins">
              Загрузка страницы...
            </h3>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
            <div className="absolute z-[0] w-[40%] h-[40%] bottom-[90%] right-[70%] rounded-full blue__gradient" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
