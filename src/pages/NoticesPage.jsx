import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NoticesPage = () => {
  return (
    <>
      <div>
        <NavLink to="/sell">sell</NavLink>

      </div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default NoticesPage;
