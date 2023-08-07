import { useDispatch, useSelector } from "react-redux";
import {
    BtnNav,
    BtnBack,
    LinkBack,
    BtnNext,
    BtnNextText
} from "./FormBtnNav.styled";
import { selectCategory, selectCurrentStage, selectIsAvailable } from "../../../../redux/petsSlice/selectors";
import { accessToNextStep, formStage } from "../../../../redux/petsSlice/petsSlice";
import { Icon } from "../../../../components/Icon/Icon"
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";



const FormBtnNav = ({ onClick }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const stage = useSelector(selectCurrentStage);
    const isAvailable = useSelector(selectIsAvailable);
    const category = useSelector(selectCategory);
    const back = useRef(location.state?.from ?? '/notices/sell');
    
    let prev;


    useEffect(() => {
        if (category !== null) {
            dispatch(
                accessToNextStep(true),
            );  
        }
        
    }, [category, dispatch])
    console.log(isAvailable);

    const countPrevStage = () => {
        if (stage === 3 || stage === 2) {
            prev = stage - 1;
            return prev;
        }

        return;
    }

    const onBackClick = () => {
        dispatch(
            formStage(countPrevStage())
        );        
    };

    return (
        <>    
                {
                    stage !== "success" &&
                    <BtnNav>
                            {
                                stage === 1
                                    ? (
                                        <BtnBack
                                            to={back.current}
                                        >
                                            <Icon
                                                iconName={"icon-arrow-left"}
                                                width={"24px"}
                                                height={"24px"}
                                                stroke={"#54ADFF"}
                                            />  
                                            <LinkBack>Cancel</LinkBack>
                                        </BtnBack>
                                    )
                                    : (
                                        <BtnBack onClick={onBackClick}>
                                            <Icon
                                                iconName={"icon-arrow-left"}
                                                width={"24px"}
                                                height={"24px"}
                                                stroke={"#54ADFF"}
                                            />
                                            <LinkBack>Back</LinkBack>
                                        </BtnBack>                                )
                            }

                            
                            <BtnNext
                                onClick={onClick}
                                type="submit"
                                $isAvailabl={isAvailable}
                            >
                                {
                                    stage === 3
                                        ? <BtnNextText>Done</BtnNextText>
                                        : <BtnNextText>Next</BtnNextText>                               
                                }
                                <Icon
                                    iconName={"icon-pawprint"}
                                    width={"24px"}
                                    height={"24px"}
                                    fill={"#FEF9F9"}
                                />                            
                            </BtnNext>
                    </BtnNav>            
                }        
        </>



    
    );
}

export default FormBtnNav;