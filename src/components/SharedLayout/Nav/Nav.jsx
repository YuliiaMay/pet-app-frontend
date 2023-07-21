import { NavItem, NavList, Wrapper } from "./Nav.styled";

export const Navigation = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem to="/news">News</NavItem>
        <NavItem to="/notices">Find pet</NavItem>
        <NavItem to="/friends">Our friends</NavItem>
      </NavList>
    </Wrapper>
  );
};
