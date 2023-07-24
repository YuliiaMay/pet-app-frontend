import UserNav from "../UserNav/UserNav";
import { useState } from "react";
import { Burger } from "../Burger/Burger";

import { useAuth } from "../../../hooks/useAuth";

import { Logo } from "../Logo/Logo";
import { Navigation } from "../Nav/Nav";

import { Wrapper } from "./Header.styled";
import { AuthNav } from "../AuthNav/AuthNav";
import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { isLoggedIn } = useAuth();

  return (
    <ResponsiveContainer>
      <Wrapper>
        <Logo />
        <Navigation />
        {isLoggedIn ? <UserNav /> : <AuthNav />}
        <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
      </Wrapper>
    </ResponsiveContainer>
  );
};
