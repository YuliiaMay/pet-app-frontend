import { Suspense } from "react";
import { Outlet } from "react-router-dom";


import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div>
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/news">News</NavLink>
      </div>
      {/* <main> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      {/* </main> */}
    </>
  );
};

export default SharedLayout;
