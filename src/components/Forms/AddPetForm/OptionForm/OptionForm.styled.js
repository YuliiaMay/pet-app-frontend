import styled from 'styled-components';


export const OptionList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
    width: 100%;
`;

export const OptionInput = styled.input`
    background-color: ${props => {
        if (props.name === props.$category) {
            return props.theme.background.accentBlue;
        } else {
            return props.theme.background.lightBlue;
        }
    }};
    color: ${props => {
        if (props.name === props.$category) {
            return props.theme.color.wight;
        } else {
            return props.theme.color.blue;
        }
    }};
    padding: 8px 16px;
    border-radius: 50px;
    border: none;
    cursor: grab;
    margin-left: 0;

    &:hover,
    &:focus {
        color: ${props => props.theme.color.wight};
        background-color: ${props => props.theme.background.accentBlue};
    }

`