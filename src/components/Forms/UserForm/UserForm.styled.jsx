/** @format */

import { ErrorMessage, Field, Form } from "formik";
import { ReactComponent as LogOutSvg } from "../../../svg/userPage/logout.svg";
import styled from "styled-components";

export const UserFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const FieldLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const FieldLabel = styled.label`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 18px;
    margin-right: 16px;
  }
`;

export const StyledField = styled(Field)`
  width: 190px;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: ${(props) => props.theme.border.radius};
  cursor: pointer;
  box-sizing: border-box;

  border: 1px solid ${(props) => (props.theme.error ? "#F43F5E" : "#54adff")};

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.border.success};
    color: ${(props) => props.theme.color.success};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.grey};
    font-size: 16px;
    line-height: 0.026;
    letter-spacing: 0.64px;
  }

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 255px;
    padding: 4px 12px;
    align-items: center;
    font-size: 16px;
  }

  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
`;

export const SubmitButton = styled.button`
  width: 248px;
  padding: 6px 107px;
  margin-top: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) => props.theme.color.wight};
  font-size: 20px;
  font-weight: 600;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 255px;
    padding: 5px 108px;
    margin: 0px 0px 0px 100px;
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  font-family: Manrope;
  margin-top: 25px;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.64px;
  color: ${(props) => props.theme.color.grey};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    position: absolute;
    left: 16px;
    bottom: 20px;
  }
`;

export const LogOutSvgStyled = styled(LogOutSvg)``;
