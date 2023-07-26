import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Field, ErrorMessage } from "formik";

export const Container = styled.div`
  margin-top: 42px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  min-height: 479px;
  background-color: ${(props) => props.theme.background.wight};
  border: 1px solid ${(props) => props.theme.border.blue};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: ${(props) => props.theme.border.shadow};

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    margin-bottom: 416px;
    width: 608px;
    min-height: 629px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    margin-bottom: 75px;
    min-height: 617px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 26px;
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    font-size: 36px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding-left: 16px;
  margin-top: 14px;
  width: 224px;
  height: 48px;
  border-radius: ${(props) => props.theme.border.radius};

  /* border: 2px solid
    ${(props) =>
    props.error ? props.theme.border.error : props.theme.border.blue}; */

  border: 2px solid
    ${(props) =>
      props.error ? props.theme.color.error : props.theme.color.blue};

  &:hover,
  &:focus {
    border: 2px solid ${(props) => props.theme.color.success};
    color: ${(props) => props.theme.color.success};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.grey};
    font-size: 16px;
    line-height: 0.026;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 768px) {
    width: 458px;
    height: 48px;
    margin-top: 32px;
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 65%;
  right: 20px;
  transform: translateY(-50%);
  color: ${(props) =>
    props.error ? props.theme.color.error : props.theme.color.success};

  @media screen and (min-width: 768px) {
    top: 72%;
  }
`;

export const InputIcon2 = styled.span`
  position: absolute;
  top: 65%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${(props) => props.theme.color.error};
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    top: 72%;
  }
`;
export const ErrorText = styled(ErrorMessage)`
  color: red;
`;

export const SubmitButton = styled.button`
  width: 256px;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: ${(props) => props.theme.border.radius};

  color: ${(props) => props.theme.color.wight};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    width: 458px;
    height: 48px;
    padding: 10px 20px;
    margin-top: 52px;
    margin-bottom: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  margin-bottom: 40px;
  color: ${(props) => props.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`;
