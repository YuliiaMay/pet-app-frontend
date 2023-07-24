import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Field, ErrorMessage } from "formik";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 91px;
  margin-right: 336px;
  margin-left: 336px;
  width: 608px;
  height: 617px;
  background: var(--unnamed, #fff);
  border: 1px solid #54adff;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 608px;
  height: 617px; */

  @media (min-width: 768px) {
  }
`;

export const StyledTitle = styled.h2`
  color: var(--unnamed, #111);
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.44px;
  margin-top: 60px;
  margin-bottom: 8px;
`;

export const StyledField = styled(Field)`
  width: 458px;
  height: 48px;
  padding-left: 10px;
  margin-top: 32px;
  color: var(--c, #888);
  background-color: #fff;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.isInvalid ? "red" : "#54adff")};

  &:last-child {
    margin-top: 0;
  }
  &:hover,
  &:focus {
    border: 1px solid #00c3ad;
    color: #0070a0;
  }

  &::placeholder {
    color: var(--c, #888);
    font-size: 16px;
    font-weight: 400;
    line-height: 0.026;
    letter-spacing: 0.64px;
  }

  @media (min-width: 768px) {
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
`;

export const SubmitButton = styled.button`
  width: 458px;
  height: 48px;
  padding: 10px 20px;
  margin-top: 52px;
  margin-bottom: 16px;
  background-color: #007bff;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  color: var(--unnamed, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  @media (min-width: 768px) {
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  margin-bottom: 60px;
  color: var(--c, #888);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const StyledSpan = styled.span`
  color: #54adff;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`;
