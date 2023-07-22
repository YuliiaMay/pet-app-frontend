import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
    Form,
    FormNav,
    FormStepTitle,
    FormStepIndication
} from "./AddPetFormsContainer.styled";
import FormTitle from "../FormTitle/FormTitle";
import FormBtnNav from "../FormBtnNav/FormBtnNav";


const AddPetFormsContainer = () => {
    return (
        <Form>
            <FormTitle />
            <FormNav>
                <div>
                    <FormStepTitle to='option'>
                        Choose  option
                        <FormStepIndication/>
                    </FormStepTitle>
                </div>
                <div>
                    <FormStepTitle to='details'>
                        Personal details
                        <FormStepIndication/>
                    </FormStepTitle>
                </div>                
                <div>
                    <FormStepTitle to='more-info'>
                        More info
                        <FormStepIndication/>
                    </FormStepTitle>
                </div>                  
            </FormNav>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>


            <FormBtnNav/>
        </Form>
    );
}

export default AddPetFormsContainer;