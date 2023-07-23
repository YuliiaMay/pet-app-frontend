import styled from 'styled-components';

export const OptionList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`;

export const CategoryOption = styled.button`
    background-color: ${props => props.theme.background.lightBlue};
    color: ${props => props.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;


    &:hover,
    &:focus {
        color: ${props => props.theme.color.wight};
        background-color: ${props => props.theme.background.accentBlue}
    }
`