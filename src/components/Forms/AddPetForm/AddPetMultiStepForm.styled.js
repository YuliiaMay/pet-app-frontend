import styled from 'styled-components';

export const AddPetContainer = styled.div`
    background-color: ${props => props.theme.background.wight};
    width: ${props => {
        if (props.$stage !== 3) {
            return "458px";
        }
    return "822px"; 
    }};
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;