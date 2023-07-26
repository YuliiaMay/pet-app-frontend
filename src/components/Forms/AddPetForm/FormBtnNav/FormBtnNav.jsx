import {
    BtnNav,
    LinkBackBox,
    LinkBack,
    BtnNext,
    BtnNextText
} from "./FormBtnNav.styled";


const FormBtnNav = ({onClick}) => {
    return (
        <BtnNav>
            <LinkBackBox>
                <LinkBack>Cancel</LinkBack>
            </LinkBackBox>
            
            <BtnNext
                onClick={onClick}
                type="button"
            >
                <BtnNextText>Next</BtnNextText>
            </BtnNext>
        </BtnNav>        
    );
}

export default FormBtnNav;