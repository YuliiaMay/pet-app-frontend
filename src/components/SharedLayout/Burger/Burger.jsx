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
} from "./Burger.styled";
import BurgerNavigationItem from "./BurgerNavigationItem";
import bglogo from "../Logo/LogoPet.jpg";
import { NavLink } from "react-router-dom";
import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
import { Icon } from "../../Icon/Icon";

export const Burger = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen ? (
        <ResponsiveContainer>
          <BurgerContainer>
            <BurgerBar>
              <NavLink to="/main">
                <img src={bglogo} alt="logotype" />
              </NavLink>
              <div>
                <CloseBtn onClick={toggleMenu} />
              </div>

              {/* <Icon
                onClick={toggleMenu}
                iconName={"icon-cross"}
                width={"24px"}
                height={"24px"}
                stroke={"#ffc107"}
                fill={"#ffc107"}
              /> */}
            </BurgerBar>
            <BurgerMenu>
              <BurgerBtnWrapper>
                <BurgerLogInBtn to="/login">
                  Log IN
                  <Icon
                    iconName={"icon-pawprint"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#ffffff"}
                    fill={"#ffffff"}
                  />
                </BurgerLogInBtn>
                <BurgerRegisterBtn to="/register">
                  Registration
                </BurgerRegisterBtn>
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
        </ResponsiveContainer>
      ) : (
        <BurgerIcon onClick={toggleMenu} />
      )}
    </>
  );
};
Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
