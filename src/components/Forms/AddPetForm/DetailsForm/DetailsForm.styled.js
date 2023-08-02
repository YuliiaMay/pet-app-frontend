import styled from 'styled-components';
import { Field, Form } from "formik";


export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;




export const Label = styled.label`
    font-weight: 500;
    font-size: 20px;
    // margin-bottom: 8px;
`;


export const Input = styled(Field)`
    border-radius: ${props => props.theme.border.radius};
    border: ${props => props.theme.border.blue};
    width: 394px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.theme.color.grey};  
`;