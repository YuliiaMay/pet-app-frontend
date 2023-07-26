/** @format */
import { Field } from "formik";
import styled from "styled-components";

export const UserAvatarImg = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
  }
`;

export const FileInput = styled(Field)`
  color: transparent;
`;

export const EditPhotoBtn = styled.button`
  color: ${(props) => props.theme.color.main};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;

  position: absolute;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: ${(props) => props.theme.sizes.mobile}) {
  }
`;

export const AvatarFormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 49px 46px 49px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    margin: 18px 34px 46px 71px;
  }
`;

export const ConfirmWrapper = styled.div`
  color: ${(props) => props.theme.color.main};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;

  display: flex;
  gap: 8px;
  position: absolute;
  transform: translate(-50%, 0);
`;
