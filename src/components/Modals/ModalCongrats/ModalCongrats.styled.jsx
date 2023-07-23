import styled from "styled-components";

import { HiXMark } from "react-icons/hi2";
import { PiPawPrintThin } from "react-icons/pi";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(43, 43, 43, 0.6);
`;

export const ModalSt = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  width: 608px;
  /* height: 354px; */
  padding: 60px 0;

  top: -112px;
  border-radius: 40px;

  background: #ffffff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const Title = styled.h2`
  padding-bottom: 52px;

  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.44px;
`;

export const SideInfo = styled.p`
  padding-bottom: 60px;

  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.96px;
`;

export const GoProfileBtn = styled.button`
  box-sizing: border-box;

  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  outline: none;
  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

  border-radius: 40px;
  background: #54adff;

  &:hover {
    outline: 2px solid #54adff;
    background: #ffffff;
    color: #54adff;
    & svg {
      color: #54adff;
    }
  }
`;

export const PawIcon = styled(PiPawPrintThin)`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  cursor: pointer;

  color: #ffffff;
`;

export const CloseIcon = styled(HiXMark)`
  position: absolute;
  right: 24px;
  top: 24px;

  width: 24px;
  height: 24px;
  transition: 0.5s;

  cursor: pointer;

  color: #54adff;

  :hover {
    color: #3cd95b;
  }
`;
