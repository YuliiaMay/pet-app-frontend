import {
    BtnNav,
    LinkBackBox,
    LinkBack,
    BtnNext,
    BtnNextText
} from "./FormBtnNav.styled";


const FormBtnNav = () => {
    return (
        <BtnNav>
            <LinkBackBox>
                <LinkBack>Cancel</LinkBack>
            </LinkBackBox>
            
            <BtnNext>
                <BtnNextText>Next</BtnNextText>
            </BtnNext>
        </BtnNav>        
    );
}

export default FormBtnNav;