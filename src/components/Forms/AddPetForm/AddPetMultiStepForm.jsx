import { useDispatch, useSelector } from "react-redux";
import { AddPetContainer } from "./AddPetMultiStepForm.styled";
import FormTitle from "./FormTitle/FormTitle";
import ProgressBar from "./ProgressBar/ProgressBar";
import { selectCategory, selectCurrentStage } from "../../../redux/petsSlice/selectors";
import OptionForm from "./OptionForm/OptionForm";
import DetailsForm from "./DetailsForm/DetailsForm";
import MoreInfoForm from "./MoreInfoForm/MoreInfoForm";
import SuccessStage from "./SuccessStage/SuccessStage";
import { useNavigate } from "react-router-dom";




const AddPetMultiStepForm = ({onLeavePage}) => {
    const stage = useSelector(selectCurrentStage);
    const category = useSelector(selectCategory);


    // const location = useLocation();
    const navigate = useNavigate();
    // const onLeavePage = useRef(location.state?.from ?? '/notices/sell');

    const dispatch = useDispatch();
    let prev;

    // const location = useLocation();
    // const back = useRef(location.state?.from ?? 'notices/sell');
    // console.log(back.current);

    const handleNavigate = () => {
        if (category === 'your pet') {
        navigate('/user');
        } else if (category === 'sell') {
        navigate('/notices/sell');
        } else if (category === 'lost/found') {
        navigate('/notices/lost-found');
        } else if (category === 'in good hands') {
        navigate('/notices/for-free');
        }
    };    

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
                    && <OptionForm onLeavePage={onLeavePage} />
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
                && <SuccessStage onLeavePage={onLeavePage} onClick={handleNavigate} />
            }            
            
        </AddPetContainer>
    );
}

export default AddPetMultiStepForm;