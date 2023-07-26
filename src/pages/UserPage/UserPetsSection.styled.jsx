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
  width: 280px;
  background-color: ${(props) => props.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  text-align: center;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    position: relative;
    width: 704px;
    height: 268px;
    display: flex;
    gap: 20px;
    padding: 20px;
  }
`;

export const PetInfoPart = styled.div`
  display: flex;
  margin-top: 12px;
  position: relative;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    position: static;
  }
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
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    right: 20px;
    top: 20px;
  }
`;

export const UserPetsList = styled.div`
  display: flex;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    display: flex;
    flex-direction:column;
    gap: 24px;
  }
`;