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
  LogoutMobBtn,
  LogoutTabBtn,
  BurgerBtnTabWrapper,
  LoginTabBox,
  UserMobBox,
  UserTabBox,
} from "./Burger.styled";
import BurgerNavigationItem from "./BurgerNavigationItem";
import bglogo from "../Logo/LogoPet.jpg";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Icon } from "../../Icon/Icon";
import { useAuth } from "../../../hooks/useAuth";
import UserNav from "../UserNav/UserNav";
import { logout } from "../../../redux/authSlice/operations";

export const Burger = ({ isOpen, toggleMenu }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isOpen ? (
        <BurgerContainer>
          <BurgerBar>
            <NavLink to="/main" onClick={toggleMenu}>
              <img src={bglogo} alt="logotype" />
            </NavLink>
            <LoginTabBox>
              {isLoggedIn ? (
                <>
                  <LogoutTabBtn to="/logout" onClick={() => dispatch(logout())}>
                    Log out
                    <Icon
                      iconName={"icon-logout"}
                      width={"24px"}
                      height={"24px"}
                      stroke={"#ffffff"}
                      fill={"#ffffff"}
                    />
                  </LogoutTabBtn>
                  <UserTabBox onClick={toggleMenu}>
                    <UserNav toggleMenu={toggleMenu} />
                  </UserTabBox>
                </>
              ) : (
                <BurgerBtnTabWrapper>
                  <BurgerLogInBtn to="/login" onClick={toggleMenu}>
                    Log IN
                    <Icon
                      iconName={"icon-pawprint"}
                      width={"24px"}
                      height={"24px"}
                      stroke={"#ffffff"}
                      fill={"#ffffff"}
                    />
                  </BurgerLogInBtn>
                  <BurgerRegisterBtn to="/register" onClick={toggleMenu}>
                    Registration
                  </BurgerRegisterBtn>
                </BurgerBtnTabWrapper>
              )}
              <div onClick={toggleMenu}>
                <Icon
                  iconName={"icon-cross"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#ffc107"}
                  fill={"#ffc107"}
                />
              </div>
            </LoginTabBox>
          </BurgerBar>

          <BurgerMenu>
            {!isLoggedIn && (
              <BurgerBtnWrapper>
                <BurgerLogInBtn to="/login" onClick={toggleMenu}>
                  Log IN
                  <Icon
                    iconName={"icon-pawprint"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#ffffff"}
                    fill={"#ffffff"}
                  />
                </BurgerLogInBtn>
                <BurgerRegisterBtn to="/register" onClick={toggleMenu}>
                  Registration
                </BurgerRegisterBtn>
              </BurgerBtnWrapper>
            )}
            {isLoggedIn && (
              <UserMobBox>
                <UserNav toggleMenu={toggleMenu} />
              </UserMobBox>
            )}
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
            {isLoggedIn && (
              <LogoutMobBtn to="/logout" onClick={() => dispatch(logout())}>
                Log out
                <Icon
                  iconName={"icon-logout"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#ffffff"}
                  fill={"#ffffff"}
                />
              </LogoutMobBtn>
            )}
          </BurgerMenu>
        </BurgerContainer>
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
