import {
    AddPetContainer,
    FormNav,
    FormStepTitle,
    FormStepIndication
} from "./AddPetFormsContainer.styled";
import FormTitle from "../FormTitle/FormTitle";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import AddPetForm from "../AddPetForm/AddPetForm";


const AddPetFormsContainer = () => {
    return (
        <AddPetContainer>
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


            <AddPetForm/>
            <FormBtnNav/>
        </AddPetContainer>
    );
}

export default AddPetFormsContainer;