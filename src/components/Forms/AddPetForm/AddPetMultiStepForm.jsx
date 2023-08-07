import { useSelector } from "react-redux";
import { AddPetContainer } from "./AddPetMultiStepForm.styled";
import FormTitle from "./FormTitle/FormTitle";
import ProgressBar from "./ProgressBar/ProgressBar";
import { selectCategory, selectCurrentStage } from "../../../redux/petsSlice/selectors";
import OptionForm from "./OptionForm/OptionForm";
import DetailsForm from "./DetailsForm/DetailsForm";
import MoreInfoForm from "./MoreInfoForm/MoreInfoForm";
import SuccessStage from "./SuccessStage/SuccessStage";
import { useState } from "react";



const AddPetMultiStepForm = () => {
    const stage = useSelector(selectCurrentStage);
    const category = useSelector(selectCategory);
    // const [isAvailable, setIsAvailable] =  useState(false);


    return (
        <AddPetContainer
            $stage={stage}
        >

            <FormTitle title={
                (category === null && "Add pet") ||
                (category === "your pet" && "Add pet") ||
                (category === "sell" && "Add pet for sell") ||
                (category === "lost/found" && "Add lost pet") ||
                (category === "in good hands" && "Add pet in good hands") ||
                (category === "success" && "Your post has been created!")
                // (stage === 1 && "Add pet")
            } />

            <ProgressBar />

            {
                stage === 1
                    && <OptionForm />
            }

            {
                stage === 2
                    && <DetailsForm />
            }

            {
                (stage === 3)
                    && <MoreInfoForm />
            }
            {
                (stage === "success")
                && <SuccessStage />
            }            
            
        </AddPetContainer>
    );
}

export default AddPetMultiStepForm;