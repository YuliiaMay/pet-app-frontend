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
} from "./Burger.styled";
import BurgerNavigationItem from "./BurgerNavigationItem";
import bglogo from "../Logo/LogoPet.jpg";
import { NavLink } from "react-router-dom";
import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
import { Icon } from "../../Icon/Icon";
import { useAuth } from "../../../hooks/useAuth";
import UserNav from "../UserNav/UserNav";

export const Burger = ({ isOpen, toggleMenu }) => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isOpen ? (
        <ResponsiveContainer>
          <BurgerContainer>
            <BurgerBar>
              <NavLink to="/main" onClick={toggleMenu}>
                <img src={bglogo} alt="logotype" />
              </NavLink>
              <LoginTabBox>
                {isLoggedIn ? (
                  <>
                    <LogoutTabBtn to="/logout" onClick={toggleMenu}>
                      Log out
                      <Icon
                        iconName={"icon-logout"}
                        width={"24px"}
                        height={"24px"}
                        stroke={"#ffffff"}
                        fill={"#ffffff"}
                      />
                    </LogoutTabBtn>
                    <div onClick={toggleMenu}>
                      <UserNav />
                    </div>
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
                <LogoutMobBtn to="/logout" onClick={toggleMenu}>
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
            {/* {isLoggedIn && (
              <LogoutMobBtn to="/logout" onClick={toggleMenu}>
                Log out
                <Icon
                  iconName={"icon-logout"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#ffffff"}
                  fill={"#ffffff"}
                />
              </LogoutMobBtn>
            )} */}
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
