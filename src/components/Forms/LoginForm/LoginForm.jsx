import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../../redux/authSlice/operations";
import {
  Container,
  StyledForm,
  StyledTitle,
  StyledField,
  ErrorText,
  SubmitButton,
  StyledLink,
  StyledSpan,
  InputContainer,
  InputIconShow,
  InputIconError,
  InputIconSuccess,
} from "./LoginForm.styled.js";

import showPasswordIcon from "/src/svg/registerPage/eyeOpen.svg";
import hidePasswordIcon from "/src/svg/registerPage/eyeClosed.svg";
import successIcon from "/src/svg/registerPage/check.svg";
import errorIcon from "/src/svg/registerPage/cross.svg";

const userSchema = Yup.object().shape({
  email: Yup.string().required().min(6).email(),
  password: Yup.string().required().min(4),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password })).then(
      (response) => !response.error && resetForm()
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setPasswordError("");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
  validationSchema={userSchema}
    >
      {({
        errors,
        touched,
        values,
        // handleChange,
        // handleBlur,
        isSubmitting,
      }) => (
        <Container>
          <StyledForm autoComplete="off">
            <StyledTitle>Login</StyledTitle>
            <div>{errors.password}</div>

            <InputContainer>
              <StyledField
                name="email"
                placeholder="Email"
                value={values.email}
                border={errors.email && touched.email && "1px solid red"}
              />
              {touched.email && errors.email && (
                <InputIconError color="red">
                  <img src={errorIcon} alt="error" color="red" />
                </InputIconError>
              )}
            </InputContainer>
            <ErrorText name="email" component="div" />

            <InputContainer>
              <StyledField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={values.password}
                error={errors.password || passwordError}
                border={errors.password && touched.password && "1px solid red"}
              />
              {!errors.password && (
                <InputIconSuccess>
                  <img src={successIcon} alt="success" />
                </InputIconSuccess>
              )}
              <InputIconShow onClick={handleTogglePassword}>
                <img
                  src={showPassword ? showPasswordIcon : hidePasswordIcon}
                  alt={showPassword ? "Show password" : "Hide password"}
                />
              </InputIconShow>
            </InputContainer>
            <ErrorText name="password" component="div" />

            <SubmitButton type="submit" disabled={isSubmitting}>
              Login
            </SubmitButton>
            <StyledLink to="/register">
              Does not have an account? <StyledSpan>Registration</StyledSpan>
            </StyledLink>
          </StyledForm>
        </Container>
      )}
    </Formik>
  );
};
export default LoginForm;
