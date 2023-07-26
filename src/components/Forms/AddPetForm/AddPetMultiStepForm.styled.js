import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddPetContainer = styled.div`
    background-color: ${props => props.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const FormNav = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`;

export const OptionStepTitle = styled(NavLink)`
    color: ${props =>
        props.$formStage >= 1
            ? props.theme.color.blue
            : props.theme.color.grey};
`;

export const OptionIndication = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${props =>
        props.$formStage >= 1
            ? props.theme.background.accentBlue
            : props.theme.background.lightBlue};           
`;

export const DataStepTitle = styled(NavLink)`
    color: ${props =>
        props.$formStage >= 2
            ? props.theme.color.blue
            : props.theme.color.grey};
`;

export const DataIndication = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${props =>
        props.$formStage >= 2
            ? props.theme.background.accentBlue
            : props.theme.background.lightBlue};           
`;

export const MoreInfoStepTitle = styled(NavLink)`
    color: ${props =>
        props.$formStage === 3
            ? props.theme.color.blue
            : props.theme.color.grey};
`;

export const MoreInfoIndication = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${props =>
        props.$formStage === 3
            ? props.theme.background.accentBlue
            : props.theme.background.lightBlue};           
`;