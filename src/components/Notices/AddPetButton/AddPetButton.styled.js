import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonAdd = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  border-radius: 40px;
  border: none;
  color: ${(props) => props.theme.color.wight};
  background-color: ${(props) => props.theme.color.blue};
  filter: drop-shadow(3px 8px 14px rgba(136, 198, 253, 0.19));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  & > span {
    @media (max-width: 480px) {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 65px;
    }
  }

  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0px;
  }
`;

export const BtnIcon = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  fill: #fef9f9;

  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;
