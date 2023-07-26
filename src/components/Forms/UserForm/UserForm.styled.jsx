/** @format */

import { ErrorMessage, Field, Form } from "formik";
import { ReactComponent as LogOutSvg } from "../../../svg/userPage/logout.svg";
import styled from "styled-components";

export const UserFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
  }
`;

export const StyledField = styled(Field)`
  margin-top: 14px;
  width: 190px;
  height: 24px;
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
    width: 458px;
    height: 48px;
    margin-top: 32px;
  }

  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {

  }
`;

export const FieldLabel = styled.label`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
`;

export const FieldLabelWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const SubmitButton = styled.button`
  height: 48px;
  width: 248px;
  padding: 6px 107px;
  margin: 21px auto 0px auto;
  margin-top: 40px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) => props.theme.color.wight};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 458px;
    height: 48px;
    padding: 10px 20px;
    margin-top: 52px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  color: ${(props) => props.theme.color.grey};
  margin-top: 30px;
`;

export const LogOutSvgStyled = styled(LogOutSvg)``;

export const FormContainer = styled.div`
  margin-top: 60px;
`;
