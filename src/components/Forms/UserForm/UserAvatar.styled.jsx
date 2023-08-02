/** @format */
import { Field, Form } from "formik";
import styled from "styled-components";

export const UserAvatarImg = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  object-position: center;
  object-fit: contain;
`;

export const FormAvatar = styled(Form)`
  position: relative;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FileInput = styled(Field)`
  position: absolute;
  transform: translate(32%, 0%);
  color: transparent;
  background-color: transparent;
  opacity: 0;
  z-index: 2;
`;

export const EditPhotoBtn = styled.button`
  color: ${(props) => props.theme.color.main};
  font-family: Manrope;
  margin-top: 15px;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 92px;
`;

export const AvatarFormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => (props.bottom ? "0px" : "59px")};

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    margin-bottom: 0px;
    margin-right: 56px;
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    margin-right: 0px;
    margin-bottom: ${(props) => (props.bottom ? "0px" : "63px")};
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
`;

export const ErrorText = styled.p`
  color: red;
`;
