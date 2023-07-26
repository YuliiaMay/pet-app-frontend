/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserPageContainer = styled.div`
  min-width: ${(props) => props.theme.sizes.mobile};
  margin: 44px 20px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    min-width: ${(props) => props.theme.sizes.tab};
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    min-width: ${(props) => props.theme.sizes.desk};
  }
`;

export const MyInfoText = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
`;

export const UserCardInfo = styled.div`
  background-color: ${(props) => props.theme.background.wight};
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  position: relative;
  text-align: center;
  padding: 20px 8px 24px 8px;
  margin-top: 18px;
  margin-bottom: 40px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    text-align: center;
    padding: 20px 8px 24px 8px;
    margin-top: 18px;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${(props) => props.theme.sizes.tab}) {
  }
`;

export const PetCardInfo = styled.div`
  background-color: ${(props) => props.theme.background.wight};
`;

export const AddPetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:24px;
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
`;