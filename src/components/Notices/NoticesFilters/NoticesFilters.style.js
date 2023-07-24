import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  margin-bottom: 42px;

  @media (min-width: 320px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 12px;

  @media (min-width: 320px) {
    flex-wrap: wrap;
    width: 205px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 319px;
  }
`;

export const ButtonFilters = styled(NavLink)`
  display: flex;
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
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;

  border-radius: 40px;
  border: none;
  color: ${(props) => props.theme.color.wight};
  background-color: ${(props) => props.theme.color.blue};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BtnIcon = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  fill: #fef9f9;
`;
