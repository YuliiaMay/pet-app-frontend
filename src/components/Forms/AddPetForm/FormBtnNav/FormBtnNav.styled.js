import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BtnNav = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
`;

export const BtnBack = styled(Link)`
    width: 150px;
    height: 40px;
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:hover,
    &:focus {
        border: ${props => props.theme.border.blue};
    }   
`;

export const LinkBack = styled.span`
    color: ${props => props.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`;

export const BtnNext = styled.button`
    width: 248px;
    height: 40px;
    background-color: ${props => props.theme.background.accentBlue};
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.border.shadow};
    }
`;

export const BtnNextText = styled.span`
    color: ${props => props.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`;