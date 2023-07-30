import styled from "styled-components";
import basis from "../../images/backgraund/bg-des@1x.png";
import basisTab from "../../images/backgraund/bg-tab@1x.png";
import basisMob from "../../images/backgraund/bg-mob@1x.png";

export const Container = styled.div`
  background-image: url(${basis});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${basisTab});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${basisMob});
  }
`;
