import { useDispatch } from "react-redux";
import succsessImg from "../../../../images/add-pet/success-created.png";
import { formStage, optionForm, detailsForm, moreInfoForm } from "../../../../redux/petsSlice/petsSlice";
import { Icon } from "../../../Icon/Icon";
import { useTimeout } from "../FormBtnNav/FormBtnNav";
import { BtnBack, LinkBack } from "../FormBtnNav/FormBtnNav.styled";
// import succsess from "../../../../images/add-pet/success.png";
import { SuccessContainer, Image } from "./SuccessStage.styled";


export const SuccessStage = ({ leaveAddPetForm }) => {
    const dispatch = useDispatch();

    useTimeout(() => {
        resetState();
    }, 5000)

    const resetState = () => {
        dispatch(
            // formStage(1),
            optionForm({
                category: null        
            }),
            detailsForm({
                name: "",
                birthday: "",
                breed: "",
                title: "",
                type: ""        
            }),
            moreInfoForm({
                sex: "",
                imgUrl: "",
                comments: "",
                location: "",
                price: ""        
            })
        );
    }    

    return ( 
        <SuccessContainer>
            <Image src={succsessImg} alt="success" width={300} />
            <BtnBack onClick={leaveAddPetForm}>
                <Icon
                    iconName={"icon-arrow-left"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                />  
                <LinkBack>Go Back</LinkBack>
            </BtnBack>
        </SuccessContainer>


    );
}

export default SuccessStage;