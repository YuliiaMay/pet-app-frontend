import styled from 'styled-components';


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 458px;
`;


export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 12px;

    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        font-size: 20px;  
    };     
`;


export const Input = styled.input`
    border-radius: ${props => props.theme.border.radius};
    border: ${props => props.theme.border.blue};
    width: 264px;
    margin-top: 4px;
    margin-bottom: 20px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme.color.grey};  

    // &:last-child {
    //     margin-bottom: 40px;
    // }

    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        font-size: 16px;  
        margin-top: 8px;
        width: 390px;

            // &:not(:last-child) {
            //     margin-bottom: 24px;
            // }
    };     
    
    @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
            &:not(:last-child) {
                margin-bottom: 20px;
            }

            // &:last-child {
            //     margin-bottom: 40px;
            // }
    };    

    &:hover,
    &:focus {
        border: 2px solid #00C3AD;
    }; 
`;