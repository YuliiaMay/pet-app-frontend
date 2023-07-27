import { useSelector } from "react-redux";
import { AddPetContainer } from "./AddPetMultiStepForm.styled";
import FormTitle from "./FormTitle/FormTitle";
import ProgressBar from "./ProgressBar/ProgressBar";
import { selectCurrentStage } from "../../../redux/petsSlice/selectors";
import OptionForm from "./OptionForm/OptionForm";
import DetailsForm from "./DetailsForm/DetailsForm";
import MoreInfoForm from "./MoreInfoForm/MoreInfoForm";


const AddPetMultiStepForm = () => {
    const currentStage = useSelector(selectCurrentStage);

    return (
        <AddPetContainer>
            <FormTitle />
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
            

            {/* <FormBtnNav onClick={onNextStep} /> */}
        </AddPetContainer>
    );
}

export default AddPetMultiStepForm;