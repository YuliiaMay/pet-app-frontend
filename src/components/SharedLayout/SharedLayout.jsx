import { Suspense } from "react";
import { Outlet } from "react-router-dom";


// import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>header</header>
      {/* <div>
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/notices">Notices</NavLink>
      </div> */}
      {/* <main> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      {/* </main> */}
    </>
  );
};

export default SharedLayout;
