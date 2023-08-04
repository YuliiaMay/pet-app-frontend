import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`;

export const StageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 60px;

    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        flex-direction: row;
        gap: 34px;
    };  
    
    @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
        gap: 72px;
    };     
`;

export const LeftColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const RightColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TheSexTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
`;

export const TheSexBtnContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`;

export const TheSexBtn= styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: ${props => {
        if (props.name === props.$sex) {
            return props.theme.background.accentBlue;
        } else {
            return "transparent";
        }
    }};
    
    // & use {
    //     ${props => {props.name === props.$sex && props.theme.color.wight}}
    // }

    &:hover,
    &:focus {
        background-color: ${props => props.theme.background.accentBlue};

        & use {
            stroke: ${(props) => props.theme.color.wight};
        }

        &:hover > span {
            color: ${props => props.theme.color.wight};
        }
    };

    > span {
        color: ${props => {
        if (props.name === props.$sex) {
            return props.theme.color.wight;
        } else {
            return props.theme.color.grey;
        }
    }};  
    };
`;

export const BtnSexText = styled.span`
    font-weight: 400;
    font-size: 16px;
`;

export const UploadLabel = styled.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;

export const UploadInput = styled.input`
    display: none;
`;

export const ImageWrapper = styled.div`
    border-radius: ${props => props.theme.border.radius};
    margin-top: 12px;
`;

export const ChoosenImg = styled.img`
    border-radius: ${props => props.theme.border.radius};
    width: 112px;
    height: 112px;    

    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        width: 182px;
        height: 182px;  
    };       
`;

export const Input = styled.input`
    border-radius: ${props => props.theme.border.radius};
    border: ${props => props.theme.border.blue};
    width: 264px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme.color.grey};  

    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        width: 395px; 
        font-size: 16px;
    };   
    
    &:hover,
    &:focus {
        border: 2px solid #00C3AD;
    };    


`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 14px;

    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        font-size: 20px;
    };    
`;

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Comment = styled.textarea`
    border-radius: 20px;
    border: ${props => props.theme.border.blue};
    max-width: 394px;
    height: auto;
    margin-top: 8px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.theme.color.grey};  
`;


