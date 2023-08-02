import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 43px;
    margin-bottom: 42px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 205px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 319px;
    gap: 12px;
  }

  @media (min-width: 1280px) {
    width: 100%;
    gap: 8px;
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.wight};
  }

  &:hover {
    box-shadow: ${(props) => props.theme.color.blue} 0px 2px 8px 0px;
  }
`;
