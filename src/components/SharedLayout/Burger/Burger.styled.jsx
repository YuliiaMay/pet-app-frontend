import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { PiPawPrint } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

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

export const BurgerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  padding: 32px 32px;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const BurgerBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
////////////////////////////////////////////////////////////

export const BurgerBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

export const BurgerLogInBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fef9f9;
  background-color: #ffc107;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 40px;
  border: 1px;
  width: 165px;
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
`;
export const BurgerPawIcon = styled(PiPawPrint)`
  fill: white;
  width: 24px;
  height: 21px;
  transform: rotate(30deg);
  margin-left: 8px;
`;
//////////////////////////////////////////////////////

export const BurgerNavList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 60px;
  margin-top: 92px;
`;

// export const BurgerNavItem = styled(NavLink)`
//   font-size: 48px;
//   font-weight: 500;
//   letter-spacing: 1.92px;
//   &:hover {
//     color: #ffc107;
//   }
//   &:focus {
//     color: #ffc107;
//   }
//   &:active {
//     color: #ffc107;
//   }
// `;

export const CloseBtn = styled(RxCross1)`
  width: 24px;
  height: 24px;
  stroke: #ffc107;
  cursor: pointer;
`;
