import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BtnNav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`;

export const LinkBackBox = styled.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${props => props.theme.border.shadow};
    }   
`;

export const LinkBack = styled(Link)`
    color: ${props => props.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`;

export const BtnNext = styled.button`
    width: 248px;
    height: 40px;
    background-color: ${props => props.theme.background.accentBlue};
    border-radius: 40px;
    border: none;
    padding-top: 9px;
    padding-bottom: 9px;

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.border.shadow};
    }
`;

export const BtnNextText = styled.span`
    color: ${props => props.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`;