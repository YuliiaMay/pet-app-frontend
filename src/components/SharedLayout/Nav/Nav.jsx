import { NavItem, NavList, Wrapper } from "./Nav.styled";

export const Navigation = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem>News</NavItem>
        <NavItem>Find pet</NavItem>
        <NavItem>Our friends</NavItem>
      </NavList>
    </Wrapper>
  );
};
