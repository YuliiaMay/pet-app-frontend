import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AddPetContainer = styled.div`
  background-color: ${(props) => props.theme.background.wight};
  width: 458px;
  height: 540px;
  border-radius: 40px;
  padding: 20px 32px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 22px;
  margin-bottom: 40px;
`;

export const FormStepTitle = styled(NavLink)`
  color: ${(props) => props.theme.color.grey};

  &.active {
    color: ${(props) => props.theme.color.blue};

    > div {
      background-color: ${(props) => props.theme.background.accentBlue};
    }
  }
`;

export const FormStepIndication = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.lightBlue};
  margin-top: 12px;
`;
