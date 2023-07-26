import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ResponsiveContainer } from "../../assets/styles";
import { Loader } from "../Loader/Loader";
import { Header } from "./Header/Header";

const SharedLayout = () => {
  return (
    <ResponsiveContainer>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </ResponsiveContainer>
  );
};

export default SharedLayout;
