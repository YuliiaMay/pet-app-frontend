import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveContainer } from "../../assets/styles";
import { Header } from "./Header/Header";

const SharedLayout = () => {
  return (
    <ResponsiveContainer>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </ResponsiveContainer>
  );
};

export default SharedLayout;
