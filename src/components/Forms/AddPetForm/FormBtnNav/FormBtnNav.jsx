import {
    BtnNav,
    LinkBackBox,
    LinkBack,
    BtnNext,
    BtnNextText
} from "./FormBtnNav.styled";


const FormBtnNav = ({onSubmit}) => {
    return (
        <BtnNav>
            <LinkBackBox>
                <LinkBack>Cancel</LinkBack>
            </LinkBackBox>
            
            <BtnNext
                onSubmit={onSubmit}
                type="button"
            >
                <BtnNextText>Next</BtnNextText>
            </BtnNext>
        </BtnNav>        
    );
}

export default FormBtnNav;