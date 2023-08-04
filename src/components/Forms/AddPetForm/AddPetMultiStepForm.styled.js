import styled from "styled-components";

export const AddPetContainer = styled.div`
  background-color: ${(props) => props.theme.background.wight};
  border-radius: 40px;
  padding: 20px 8px;
  margin-top: 24px;
  width: 264px;
  height: 456px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    padding: 20px 32px;
    margin-left: auto;
    margin-right: auto;
    width: ${(props) => {
      if (props.$stage !== 3) {
        return "394px";
      }
      return "704px";
    }};
    height: ${(props) => {
      if (props.$stage === 1) {
        return "502px";
      } else if (props.$stage === 2) {
        return "648px";
      }
      return "602px";
    }};
  }

  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
    width: ${(props) => {
      if (props.$stage !== 3) {
        return "458px";
      }
      return "822px";
    }};
    height: ${(props) => {
      if (props.$stage !== 3) {
        return "542px";
      }
      return "602px";
    }};
  }
`;
