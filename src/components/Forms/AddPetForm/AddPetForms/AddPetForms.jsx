import { Suspense } from "react";
import { Outlet } from "react-router-dom";


export const AddPetForms = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </>        
    );
}

// export default AddPetForms;