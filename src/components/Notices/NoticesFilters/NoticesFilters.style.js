import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 43px;

  @media (max-width: 479px) {
    justify-content: none;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 479px) {
    display: block;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ButtonFilters = styled(NavLink)`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  color: ${(props) => props.theme.color.blue};
  background-color: ${(props) => props.theme.background.lightBlue};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.wight};
  }
`;

export const ButtonAdd = styled(NavLink)`
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  color: ${(props) => props.theme.color.wight};
  background-color: ${(props) => props.theme.color.blue};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BtnIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;
