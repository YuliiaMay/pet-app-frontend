import styled from "styled-components";
import paws from "../../images/backgraund/bg-des@1x.png";
import pawsTab from "../../images/backgraund/bg-tab@1x.png";
import pawsMob from "../../images/backgraund/bg-mob@1x.png";
export const Container = styled.div`
  background-image: url(${paws});
  display: flex;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${pawsTab});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${pawsMob});
  }
`;
export const MainTitle = styled.h1`
  font-size: 68px;
  font-weight: 700;
  line-height: 1.3;
  width: 501px;
  margin-top: 198px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 80px;
    width: 588px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 34px;
    margin-top: 60px;
  }
`;

export const PhotoBox = styled.div`
  position: fixed;
`;

export const Frenchie = styled.picture`
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 230px;
    left: 305px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    left: -30px;
    top: 520px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    left: -20px;
    top: 230px;
    & img {
      width: 225px;
    }
  }
`;

export const Brownie = styled.picture`
  @media screen and (min-width: 1280px) {
    position: absolute;
    left: 520px;
    top: -65px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    left: 104px;
    top: 180px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    left: 13px;
    top: 100px;
    & img {
      width: 310px;
    }
  }
`;

export const Cat = styled.picture`
  position: absolute;
  @media screen and (min-width: 1280px) {
    top: 460px;
    left: 765px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 360px;
    top: 710px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    top: 380px;
    left: 130px;
    & img {
      width: 170px;
    }
  }
`;
