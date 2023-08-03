import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PiPawPrint } from "react-icons/pi";

export const AuthList = styled.nav`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 24px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogInBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fef9f9;
  background-color: #ffc107;
  font-weight: 700;
  padding: 8px 0;
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
export const RegisterBtn = styled(NavLink)`
  font-weight: 700;
  padding: 8px 0;
  width: 165px;
  text-align: center;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 40px;
  transition: 0.4s;
  &:hover {
    background-color: #ffc107;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;
export const PawIcon = styled(PiPawPrint)`
  fill: white;
  width: 24px;
  height: 21px;
  transform: rotate(30deg);
  margin-left: 8px;
`;
