import styled from 'styled-components';

export const AddPetContainer = styled.div`
    background-color: ${props => props.theme.background.wight};
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    width: 280px;    
    height: 496px;


    @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
        width: ${props => {
            if (props.$stage !== 3) {
                return "458px";
            }
            return "704px"; 
        }};
        height: ${props => {
            if (props.$stage === 1) {
                return "542px";
            } else if (props.$stage === 2) {
                return "648px";
            }
            return "602px"; 
        }};            
    };

    @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
        width: ${props => {
            if (props.$stage !== 3) {
                return "458px";
            }
            return "822px"; 
        }};
        height: ${props => {
            if (props.$stage !== 3) {
                return "542px";
            }
            return "602px"; 
        }};           
    }    
`;