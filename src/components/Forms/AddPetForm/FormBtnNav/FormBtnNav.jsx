import { useDispatch, useSelector } from "react-redux";
import {
    BtnNav,
    LinkBackBox,
    LinkBack,
    BtnNext,
    BtnNextText
} from "./FormBtnNav.styled";
import { selectCurrentStage } from "../../../../redux/petsSlice/selectors";
import { formStage } from "../../../../redux/petsSlice/petsSlice";
import { FaArrowLeft } from "react-icons/fa";


const FormBtnNav = ({ onClick }) => {
    const stage = useSelector(selectCurrentStage);
    const dispatch = useDispatch();
    let prev;

    const countPrevStage = () => {
        if (stage === 3 || stage === 2) {
            prev = stage - 1;
            return prev;
        }

        return;
    }

    const onCancelClick = () => {
        console.log(prev);
        dispatch(
            formStage(countPrevStage())
        );        
    };

    return (
        <>
            {
                stage !== "success" &&
                    <BtnNav>
                        <LinkBackBox onClick={onCancelClick}>
                            <FaArrowLeft/>
                            <LinkBack>
                                {
                                    stage === 1
                                        ? "Cancel"
                                        : "Back"
                                }
                            </LinkBack>
                        </LinkBackBox>
                        
                        <BtnNext
                            onClick={onClick}
                            type="submit"
                        >
                        {
                            stage === 3
                                ? <BtnNextText>Done</BtnNextText>
                                : <BtnNextText>Next</BtnNextText>                               
                        }
                        </BtnNext>
                    </BtnNav>            
            }        
        </>

    
    );
}

export default FormBtnNav;