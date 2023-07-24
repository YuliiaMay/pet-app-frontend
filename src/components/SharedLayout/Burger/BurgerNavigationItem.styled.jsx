import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const BurgerNavItem = styled(NavLink)`
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 1.92px;
  &:hover {
    color: #ffc107;
  }
  &:focus {
    color: #ffc107;
  }
  &:active {
    color: #ffc107;
  }
  @media screen and (max-width: 767px) {
    font-size: 32px;
    letter-spacing: 1.28px;
  }
`;
