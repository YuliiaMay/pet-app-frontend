/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserPageContainer = styled.div`
  margin: 44px 20px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    min-width: ${(props) => props.theme.sizes.tab};
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    min-width: ${(props) => props.theme.sizes.desk};
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
  }
`;

export const MyInfoText = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 28px;
  }
`;

export const MyInfoTextWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    margin-bottom:24px;
  }
`;

export const UserCardInfo = styled.div`
  width: 280px;
  background-color: ${(props) => props.theme.background.wight};
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  position: relative;
  text-align: center;
  padding: 20px 8px 6px 8px;
  margin-top: 18px;
  margin-bottom: 40px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 704px;
    height: 268px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
    display: block;
    width: 395px;
    height: 540px;
    position: relative;
    text-align: center;
    padding: 20px 24px 21px 16px;
    margin-top: 18px;
    margin-bottom: 40px;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    right: 18px;
    top: 18px;
  }
`;

export const PetCardInfo = styled.div`
  background-color: ${(props) => props.theme.background.wight};
`;

export const AddPetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 280px;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 704px;
  }
`;

export const AddPetLink = styled(Link)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.wight};
`;

export const MyPetsText = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 28px;
  }
`;