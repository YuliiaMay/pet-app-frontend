import { useDispatch, useSelector } from "react-redux";
import {
    BtnNav,
    BtnBack,
    LinkBack,
    BtnNext,
    BtnNextText
} from "./FormBtnNav.styled";
import { selectCurrentStage } from "../../../../redux/petsSlice/selectors";
import { formStage } from "../../../../redux/petsSlice/petsSlice";
import { Icon } from "../../../../components/Icon/Icon"
import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router";


export function useTimeout(callback, delay) {
  const timeoutRef = useRef(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
};



const FormBtnNav = ({ onClick, leaveAddPetForm }) => {
    const stage = useSelector(selectCurrentStage);
    const dispatch = useDispatch();
    let prev;

    const location = useLocation();
    const back = useRef(location.state?.from ?? 'notices/sell');
    // console.log(back.current);


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
        <div>    

            <div>
                {
                    stage !== "success" &&
                    <BtnNav>
                            {
                                stage === 1
                                    ? (
                                        <BtnBack to={back.current}>
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
            </div>        
        
        </div>



    
    );
}

export default FormBtnNav;