import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Field, ErrorMessage } from "formik";

export const Container = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  min-height: 425px;
  background-color: ${(props) => props.theme.background.wight};
  border: 1px solid ${(props) => props.theme.border.blue};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: ${(props) => props.theme.border.shadow};

  @media screen and (min-width: 768px) {
    margin-top: 82px;
    //margin-bottom: 564px;
    width: 608px;
    min-height: 481px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    // margin-bottom: 141px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`;

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 40px;
  //margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    //margin-bottom: 40px;
    font-size: 36px;
  }
`;

export const StyledField = styled(Field)`
  padding-left: 16px;
  margin-top: 14px;
  width: 248px;
  height: 48px;
  border-radius: ${(props) => props.theme.border.radius};
  cursor: pointer;

  border: 1px solid ${(props) => (props.theme.error ? "#F43F5E" : "#54adff")};

  /* width: 100%;
  padding: 10px 40px 10px 30px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  border-radius: 4px; */
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
  @media screen and (min-width: 768px) {
    width: 458px;
    height: 48px;
    margin-top: 32px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  margin-top: 4px;
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
  font-weight: 600;

  @media screen and (min-width: 768px) {
    width: 458px;
    margin-top: 60px;
    margin-bottom: 20px;
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
