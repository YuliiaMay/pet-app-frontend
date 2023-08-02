import styled from 'styled-components';


export const OptionList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
`;

export const OptionInput = styled.input`
    background-color: ${props => props.theme.background.lightBlue};
    color: ${props => props.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;
    cursor: grab;

    &:hover,
    &:focus {
        color: ${props => props.theme.color.wight};
        background-color: ${props => props.theme.background.accentBlue};
    }
`