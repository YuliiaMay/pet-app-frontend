// import UserNav from "../UserNav/UserNav";
import { useState } from "react";
import { Burger } from "../Burger/Burger";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Nav/Nav";

import { Wrapper } from "./Header.styled";
import { AuthNav } from "../AuthNav/AuthNav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <AuthNav />
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* <UserNav /> */}
    </Wrapper>
  );
};
