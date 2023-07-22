import styled from "styled-components";
import paws from "../images/backgraund/bg-des@1x.png";
export const Container = styled.div`
  background-image: url(${paws});
  /* margin-right: -190px; */
  padding: 0 16px;
  display: flex;
  position: relative;
`;
export const MainTitle = styled.h1`
  font-size: 68px;
  font-weight: 700;
  line-height: 1.3;
  width: 501px;
  margin-top: 198px;
`;

export const PhotoBox = styled.div``;

export const Frenchie = styled.img`
  position: absolute;
  bottom: -200px;
  left: 320px;
  height: 425px;
`;

export const Brownie = styled.img`
  position: absolute;
  left: 520px;
  top: -20px;
  width: 632px;
  height: 680px;
`;

export const Cat = styled.img`
  position: absolute;
  bottom: -200px;
  left: 750px;
  width: 350px;
  height: 200px;
`;
