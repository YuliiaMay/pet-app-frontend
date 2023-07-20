import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
`;

export const Nav = styled(NavLink)`
  display: flex;
  gap: 40px;
  align-items: center;
`;
