/** @format */

import styled from "styled-components";

export const PetImg = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
`;

export const PetInfoCard = styled.div`
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  text-align: center;
`;

export const PetInfoPart = styled.div`
  display: flex;
  margin-top: 12px;
  position: relative;
`;

export const PetInfoTextName = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export const PetInfoDescription = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  right: 0;
`;