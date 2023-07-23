import PropTypes from "prop-types";
import {
  BurgerMenu,
  BurgerContainer,
  BurgerNavItem,
  BurgerNavList,
  BurgerIcon,
  BurgerBar,
  BurgerLogInBtn,
  BurgerBtnWrapper,
  BurgerRegisterBtn,
  BurgerPawIcon,
  CloseBtn,
} from "./Burger.styled";

import bglogo from "../Logo/LogoPet.jpg";
import { Link } from "react-router-dom";
export const Burger = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      {isOpen ? (
        <BurgerContainer>
          <BurgerBar>
            <Link to="/main">
              <img src={bglogo} alt="logotype" />
            </Link>
            <CloseBtn onClick={toggleMenu} />
          </BurgerBar>

          <BurgerMenu>
            <BurgerBtnWrapper>
              <BurgerLogInBtn to="/login">
                Log IN
                <BurgerPawIcon />
              </BurgerLogInBtn>
              <BurgerRegisterBtn to="/register">Registration</BurgerRegisterBtn>
            </BurgerBtnWrapper>

            <BurgerNavList>
              <BurgerNavItem to="/news">News</BurgerNavItem>
              <BurgerNavItem to="/notices">Find pet</BurgerNavItem>
              <BurgerNavItem to="/friends">Our friends</BurgerNavItem>
            </BurgerNavList>
          </BurgerMenu>
        </BurgerContainer>
      ) : (
        <BurgerIcon onClick={toggleMenu} />
      )}
    </div>
  );
};
Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
