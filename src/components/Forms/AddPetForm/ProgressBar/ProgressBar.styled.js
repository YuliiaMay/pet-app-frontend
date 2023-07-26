import styled from 'styled-components';

export const Bar = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`;

export const OptionStep = styled.div`
`;

export const OptionStepTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${props => {
        if (props.$formStage === 1) {
            return props.theme.color.blue;
        } else if (props.$formStage > 1 || props.$formStage === "success") {
            return props.theme.color.success;
        }
    }}
`;

export const OptionIndication = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${props => {
        if (props.$formStage === 1) {
            return props.theme.background.blue;
        } else if (props.$formStage > 1 || props.$formStage === "success") {
            return props.theme.background.success;
        }    
    }};           
`;

export const DetailsStep = styled.div`
`;

export const DetailsStepTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${props => {
        if (props.$formStage === 2) {
            return props.theme.color.blue;
        } else if (props.$formStage > 2 || props.$formStage === "success") {
            return props.theme.color.success;
        } else {
            return props.theme.color.grey;
        }
    }}
`;

export const DetailsIndication = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${props => {
        if (props.$formStage === 2) {
            return props.theme.background.blue;
        } else if (props.$formStage > 2 || props.$formStage === "success") {
            return props.theme.background.success;
        } else {
            return props.theme.background.lightBlue;
        }    
    }};          
`;

export const MoreInfoStep = styled.div`
`;

export const MoreInfoStepTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${props => {
        if (props.$formStage === 3) {
            return props.theme.color.blue;
        } else if (props.$formStage === "success") {
            return props.theme.color.success;
        } else {
            return props.theme.color.grey;
        }
    }}
`;

export const MoreInfoIndication = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${props => {
        if (props.$formStage === 3) {
            return props.theme.background.blue;
        } else if (props.$formStage === "success") {
            return props.theme.background.success;
        } else {
            return props.theme.background.lightBlue;
        }  
    }};         
`;