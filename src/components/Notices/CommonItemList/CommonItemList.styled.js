import { styled } from "styled-components";

export const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;


export const Li = styled.li`
    cursor: pointer;
    align-items: center;
    background-color: ${(props) => props.theme.background.lightBlue};
    border-radius: 16px;
    color: ${(props) => props.theme.color.main};
    stroke: ${(props) => props.theme.color.blue};
    display: flex;
    gap: 3px;
    justify-content: center;
    width: 81px;
    height: 28px;
    padding: 0 5px;

    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.background.accentBlue};
        transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: ${(props) => props.theme.color.wight};
         & use {
        stroke: ${props => props.theme.color.wight};
         fill: ${props => props.theme.color.wight};
    }  
    }
         
`;