import styled from "styled-components";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LogoutBtn = styled(NavLink)`
  font-weight: 700;
  letter-spacing: 0.64px;
  color: #ffffff;
  background-color: #54adff;
  border-radius: 40px;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const Avatar = styled(FaRegCircleUser)`
  width: 28px;
  height: 28px;
  fill: #ffc107;
  margin-right: 12px;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.64px;
  color: #ffc107;
`;
