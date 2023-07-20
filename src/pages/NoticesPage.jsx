import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NoticesPage = () => {
  return (
    <>
      <div>Notices Page</div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default NoticesPage;
