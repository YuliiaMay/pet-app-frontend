import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const BurgerIcon = styled(AiOutlineMenu)`
  width: 24px;
  height: 24px;
  fill: #ffc107;
  cursor: pointer;
  margin-left: 24px;
  @media screen and (min-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

export const Logos = styled.picture`
  max-width: 162px;
  @media screen and (max-width: 767px) {
    max-width: 116px;
  }
`;

export const BurgerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: white;

  @media screen and (min-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    gap: 40px;
  }
`;
export const BurgerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 22px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex: 1 auto;
  }
`;
////////////////////////////////////////////

export const BurgerBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

export const BurgerBtnTabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerLogInBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #fef9f9;
  background-color: #ffc107;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 40px;
  border: 1px;
  width: 165px;
  transition: 0.4s;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(239, 244, 167, 1) 1%,
      rgba(255, 193, 7, 1) 93%
    );
  }
`;

export const BurgerRegisterBtn = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 20px;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 40px;
  width: 165px;
  text-align: center;
  transition: 0.4s;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 142px;
  }
  &:hover {
    background-color: #ffc107;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

////////////////////////////////////////////

export const BurgerNavList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 60px;

  margin-top: 74px;
  @media screen and (max-width: 767px) {
    gap: 20px;
    margin-top: 84px;
    margin-bottom: 160px;
  }
`;
export const BurgerNavigationItem = styled(NavLink)``;

export const CloseBtn = styled.div`
  cursor: pointer;
  margin-left: auto;
`;

export const LogoutMobBtn = styled(NavLink)`
  font-weight: 700;
  letter-spacing: 0.64px;
  color: #ffffff;
  background-color: #54adff;
  border-radius: 40px;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-right: 40px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 100%);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    margin-bottom: 20px;
    width: 135px;
    margin-right: auto;
    display: inline-flex;
  }
`;

export const LogoutTabBtn = styled(NavLink)`
  font-weight: 700;
  letter-spacing: 0.64px;
  color: #ffffff;
  background-color: #54adff;
  border-radius: 40px;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 100%);
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1279px) {
    display: none;
  }
`;

export const LoginTabBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const UserTabBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const UserMobBox = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BoxMob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserNameMob = styled.div`
  color: #ffc107;
`;
