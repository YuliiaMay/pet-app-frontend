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
  // Text,
  SubmitButton,
  StyledLink,
  StyledSpan,
  InputContainer,
  InputIconShow,
  InputIconError,
  //InputIconSuccess,
} from "./LoginForm.styled.js";

import showPasswordIcon from "../../../svg/registerPage/eyeOpen.svg";
import hidePasswordIcon from "../../../svg/registerPage/eyeClosed.svg";
//import successIcon from "../../../svg/registerPage/check.svg";
import errorIcon from "../../../svg/registerPage/cross.svg";

const userSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password can not have more then 16 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  // const handleSubmit = ({ email, password }, { resetForm }) => {
  //   dispatch(login({ email, password })).then(
  //     (response) => !response.error && resetForm()
  //   );
  // };
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password })).then((response) => {
      if (response.error) {
        setErrorMessage("Login failed. Please try again later.");
      } else {
        setErrorMessage("");
        resetForm();
      }
    });
  };

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
      {({ errors, touched, values, handleBlur, isSubmitting }) => (
        <Container>
          <StyledForm autoComplete="off">
            <StyledTitle>Login</StyledTitle>

            <InputContainer>
              <StyledField
                name="email"
                placeholder="Email"
                value={values.email}
                onBlur={handleBlur}
                border={errors.email && touched.email && "1px solid red"}
              />
              {touched.email && errors.email && (
                <InputIconError>
                  <img src={errorIcon} alt="error" />
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
              {/* {!errors.password && (
                <Text color="green">{"Password is secure"}</Text>
              )} */}

              {/* {!errors.password && (
                <InputIconSuccess>
                  <img src={successIcon} alt="success" />
                </InputIconSuccess>
              )} */}
              <InputIconShow onClick={handleTogglePassword}>
                <img
                  src={showPassword ? showPasswordIcon : hidePasswordIcon}
                  alt={showPassword ? "Show password" : "Hide password"}
                />
              </InputIconShow>
            </InputContainer>
            <ErrorText name="password" component="div" />

            <>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Login
              </SubmitButton>
              {errors && <div>{errorMessage} </div>}
            </>
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
