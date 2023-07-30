import { useSelector } from "react-redux";
import { AddPetContainer } from "./AddPetMultiStepForm.styled";
import FormTitle from "./FormTitle/FormTitle";
import ProgressBar from "./ProgressBar/ProgressBar";
import { selectCategory, selectCurrentStage } from "../../../redux/petsSlice/selectors";
import OptionForm from "./OptionForm/OptionForm";
import DetailsForm from "./DetailsForm/DetailsForm";
import MoreInfoForm from "./MoreInfoForm/MoreInfoForm";


const AddPetMultiStepForm = () => {
    const currentStage = useSelector(selectCurrentStage);
    const category = useSelector(selectCategory);
    const stage = useSelector(selectCurrentStage);  
            
    return (
        <AddPetContainer>
            <FormTitle title={
                (category === "your pet" || category === null && "Add pet") ||
                (category === "sell" && stage !== 1 && "Add pet for sell") ||
                (category === "lost" && stage !== 1 && "Add lost pet") ||
                (category === "good hands" && stage !== 1 && "Add pet in good hands")
            } />
            <ProgressBar />

            {
                currentStage === 1
                    && <OptionForm stage={currentStage} />
            }

            {
                currentStage === 2
                    && <DetailsForm stage={currentStage} />
            }   

            {
                (currentStage === 3 || currentStage === "success")
                    && <MoreInfoForm stage={currentStage} />
            }
            
        </AddPetContainer>
    );
}

export default AddPetMultiStepForm;