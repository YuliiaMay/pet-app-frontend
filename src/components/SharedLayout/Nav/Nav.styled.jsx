import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  /* margin-right: 270px; */
`;

export const NavItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    color: #ffc107;
  }
  &:focus {
    color: #ffc107;
  }
  &:active {
    color: #ffc107;
  }
`;
