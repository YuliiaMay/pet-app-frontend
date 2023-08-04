import { useDispatch } from "react-redux";
import succsessImg from "../../../../images/add-pet/success-created.png";
import { formStage, optionForm, detailsForm, moreInfoForm } from "../../../../redux/petsSlice/petsSlice";
import { Icon } from "../../../Icon/Icon";
// import { useTimeout } from "../FormBtnNav/FormBtnNav";
import { BtnBack, LinkBack } from "../FormBtnNav/FormBtnNav.styled";
// import succsess from "../../../../images/add-pet/success.png";
import { SuccessContainer, Image } from "./SuccessStage.styled";


export const SuccessStage = ({ onLeavePage, onClick }) => {
    const dispatch = useDispatch();


   

    return ( 
        <SuccessContainer>
            <Image src={succsessImg} alt="success" width={300} />
            <BtnBack onLeavePage={onLeavePage}>
                <Icon
                    iconName={"icon-arrow-left"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                />  
                <LinkBack onClick={onClick}>Go Back</LinkBack>
            </BtnBack>
        </SuccessContainer>


    );
}

export default SuccessStage;