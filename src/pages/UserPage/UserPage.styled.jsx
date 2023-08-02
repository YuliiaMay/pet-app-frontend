/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    display: block;
    margin-top: 60px;
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    min-width: ${(props) => props.theme.sizes.desk};
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 62px;
  }
`;

export const MyInfoText = styled.h2`
  margin-bottom: 18px;
  font-family: Manrope;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const UserCardInfo = styled.div`
  background-color: ${(props) => props.theme.background.wight};
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  position: relative;
  text-align: center;
  padding: 20px 8px;
  margin-bottom: 40px;
  width: 264px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 664px;
    height: 228px;

    padding: 20px;
  }
  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
    display: block;
    width: 395px;
    height: 480px;
    position: relative;
    text-align: center;
    padding: 20px 24px 21px 16px;
    margin-top: 18px;
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    display: block;
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

export const AddPetContainer = styled.div`
  margin-bottom: 137px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    margin-bottom: 121px;
  }

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    margin-bottom: 0px;
  }
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
