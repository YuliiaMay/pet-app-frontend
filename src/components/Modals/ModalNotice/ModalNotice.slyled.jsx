import styled from "styled-components";

import { HiXMark } from "react-icons/hi2";
import { PiPawPrintThin } from "react-icons/pi";

export const WrapperModal = styled.div`
  width: 681px;
  height: 540px;

  padding: 32px 32px;
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

export const ContainerInfo = styled.div`
  display: flex;

  margin-bottom: 30px;
`;

export const ImgWrapper = styled.div`
  width: 262px;
  height: 298px;
  overflow: hidden;
  border-radius: 0px 0px 40px 40px;
  span {
    position: absolute;
    margin-top: 16px;
    padding: 11px;

    font-size: 14px;
    font-weight: 500;

    border-radius: 0px 20px 20px 0px;
    background: #cce4fb;
  }
`;

export const Title = styled.h2`
  width: 250px;

  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  color: #000;
`;

export const WrapperInfo = styled.div`
  display: block;
  margin-left: 24px;
`;

export const WrapperListInfo = styled.div`
  font-size: 16px;
  table {
    /* width: 100px; */
  }
  table,
  td,
  th {
    height: 27px;
    padding-right: 50px;
    font-weight: 600;
  }
  td {
    font-weight: 600;

    /* margin-left: 10px; */
  }
  span {
    font-weight: 200;
  }
  a {
    font-weight: 200;

    text-decoration-line: underline;

    color: #ffc107;
  }
`;

export const SideInfo = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;

  span {
    padding-left: 3px;
    font-weight: 500;
  }
`;
export const Comments = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 70px;
`;

export const GoProfileBtn = styled.button`
  /* box-sizing: border-box; */

  display: flex;
  width: 130px;
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

export const ContactLink = styled.a`
  padding-left: 10px;

  display: flex;

  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 40px;

  font-size: 16px;

  font-weight: 700;
  letter-spacing: 0.64px;

  color: #54adff;
  border: 2px solid #54adff;
`;

export const PawIcon = styled(PiPawPrintThin)`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  cursor: pointer;

  color: #ffffff;
`;
