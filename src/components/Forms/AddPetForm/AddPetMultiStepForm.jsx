import { useSelector } from "react-redux";
import { AddPetContainer } from "./AddPetMultiStepForm.styled";
import FormTitle from "./FormTitle/FormTitle";
import ProgressBar from "./ProgressBar/ProgressBar";
import { selectAllPetData, selectCategory, selectCurrentStage } from "../../../redux/petsSlice/selectors";
import OptionForm from "./OptionForm/OptionForm";
import DetailsForm from "./DetailsForm/DetailsForm";
import MoreInfoForm from "./MoreInfoForm/MoreInfoForm";
import SuccessStage from "./SuccessStage/SuccessStage";




const AddPetMultiStepForm = ({leaveAddPetForm}) => {
    const stage = useSelector(selectCurrentStage);
    const category = useSelector(selectCategory);

    console.log(leaveAddPetForm);
    return (
        <AddPetContainer>

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
                    && <OptionForm leaveAddPetForm={leaveAddPetForm} />
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
                    && <SuccessStage leaveAddPetForm={leaveAddPetForm}/>
            }            
            
        </AddPetContainer>
    );
}

export default AddPetMultiStepForm;