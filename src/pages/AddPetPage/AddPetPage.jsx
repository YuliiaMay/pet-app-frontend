import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";



const AddPetPage = () => {
  return (
    <>
      <nav>
        <NavLink to='option'>Choose  option</NavLink>
        <NavLink to='details'>Personal details</NavLink>
        <NavLink to='more-info'>More info</NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </>
  );
};

export default AddPetPage;
