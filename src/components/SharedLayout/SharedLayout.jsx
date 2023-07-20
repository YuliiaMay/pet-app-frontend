import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
