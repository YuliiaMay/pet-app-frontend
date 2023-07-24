import styled from "styled-components";
import paws from "../../images/backgraund/bg-des@1x.png";
import pawsTab from "../../images/backgraund/bg-tab@1x.png";
import pawsMob from "../../images/backgraund/bg-mob@1x.png";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${paws});

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${pawsTab});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${pawsMob});
    background-repeat: no-repeat;
    background-position: cover;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 71px;
  margin-bottom: 80px;
  @media screen and (max-width: 767px) {
    margin-top: 84px;
  }
`;
export const ErrorImg = styled.picture`
  display: inline-flex;
  margin: 0 auto;
`;

export const BackToMain = styled(NavLink)`
  color: #fef9f9;
  font-size: 16px;
  padding: 8px 0;
  width: 248px;
  font-weight: 700;
  letter-spacing: 0.64px;
  background-color: #54adff;
  border-radius: 40px;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
`;
