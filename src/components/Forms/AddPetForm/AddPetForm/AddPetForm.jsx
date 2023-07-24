import { Formik } from "formik";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


export const AddPetForm = () => {
    const categories = [];
    const newPost = {
        category: '',  


    }
    return (
        // <Formik>
            <form>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
            </form>    
        // </Formik>       
    );
}

export default AddPetForm;