import PropTypes from "prop-types";
import {
  BurgerMenu,
  BurgerContainer,
  BurgerNavList,
  BurgerIcon,
  BurgerBar,
  BurgerLogInBtn,
  BurgerBtnWrapper,
  BurgerRegisterBtn,
  CloseBtn,
  BurgerPawIcon,
} from "./Burger.styled";
import BurgerNavigationItem from "./BurgerNavigationItem";
import bglogo from "../Logo/LogoPet.jpg";
import { Link } from "react-router-dom";
// import { useAuth } from "./../../../hooks/useAuth";
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
              <BurgerNavigationItem to="/news" toggleMenu={toggleMenu}>
                News
              </BurgerNavigationItem>
              <BurgerNavigationItem to="/notices" toggleMenu={toggleMenu}>
                Find pet
              </BurgerNavigationItem>
              <BurgerNavigationItem to="/friends" toggleMenu={toggleMenu}>
                Our friends
              </BurgerNavigationItem>
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
