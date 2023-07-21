import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Header, Main, Nav } from "./SharedLayout.style";
import { ResponsiveContainer } from "../../assets/styles/ResponsiveContainer";

const SharedLayout = () => {
  return (
    <ResponsiveContainer>
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
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </ResponsiveContainer>
  );
};

export default SharedLayout;
