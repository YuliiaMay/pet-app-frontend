import { useAuth } from "../../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { Wrapper } from "./Header.styled";

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <Logo />
      <Navigation />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Wrapper>
  );
};
