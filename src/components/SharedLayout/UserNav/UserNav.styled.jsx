import styled from "styled-components";
import { FaRegCircleUser } from "react-icons/fa6";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
