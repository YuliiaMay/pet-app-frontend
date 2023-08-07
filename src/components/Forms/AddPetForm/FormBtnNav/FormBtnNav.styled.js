import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BtnNav = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 0px;
    // padding-left: auto;
    // padding-right: auto;
    gap: 20px;


    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        flex-direction: row;  
        justify-content: space-around;
        gap: 32px;  
        // margin-top: 40px;
        
        // @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        //     margin-top: 40px;
        // }

        // @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
        //     margin-top: 40px;
        // }
    };      
`;




export const BtnBack = styled(Link)`
    width: 200px;
    height: 40px;
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

export const LinkBack = styled.span`
    color: ${props => props.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`;

export const BtnNext = styled.button`
    width: 200px;
    height: 40px;
    background-color: ${props => {
        if (props.$isAvailable === false) {
            return props.theme.background.lightBlue;
        }
        return props.theme.background.accentBlue;
        }
    };
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