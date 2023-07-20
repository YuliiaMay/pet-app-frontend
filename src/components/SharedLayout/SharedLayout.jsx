import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Header, Nav } from "./SharedLayout.style";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <div>
          <NavLink to="/main">Logo</NavLink>
        </div>
        <Nav>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find Pets</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
        </Nav>
        <div>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Registration</NavLink>
        </div>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main> 
    </>
  );
};

export default SharedLayout;