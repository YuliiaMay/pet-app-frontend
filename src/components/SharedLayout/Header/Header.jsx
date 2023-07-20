import { Logo } from "../Logo/Logo";
import { Navigation } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { Wrapper } from "./Header.styled";

export const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <UserNav />
    </Wrapper>
  );
};
