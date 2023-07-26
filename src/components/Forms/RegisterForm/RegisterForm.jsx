import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../../redux/authSlice/operations";
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
  InputIcon,
  InputIcon2,
} from "./RegisterForm.styled.js";

import showPasswordIcon from "/src/svg/registerPage/eyeOpen.svg";
import hidePasswordIcon from "/src/svg/registerPage/eyeClosed.svg";
//import successIcon from "/src/svg/registerPage/check.svg"
import errorIcon from "/src/svg/registerPage/cross.svg";

const userSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().min(6).email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(), //.oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password })).then(
      (response) => !response.error && resetForm()
    );
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setPasswordError("");
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
    setConfirmPasswordError("");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ errors }) => (
        <Container>
          <StyledForm autoComplete="off">
            <StyledTitle>Registration</StyledTitle>

            <StyledField type="text" name="name" placeholder="Name" />
            <ErrorText name="name" component="div" />

            <InputContainer>
              <StyledField
                type="text"
                name="email"
                placeholder="Email"
                error={errors.email}
              />
              {errors.email && (
                <InputIcon2>
                  <img src={errorIcon} alt="error" width="24" height="24" />
                </InputIcon2>
              )}
            </InputContainer>
            <ErrorText name="email" component="div" />

            <InputContainer>
              <StyledField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                error={errors.password || passwordError}
              />
              <InputIcon onClick={handleTogglePassword}>
                <img
                  src={showPassword ? hidePasswordIcon : showPasswordIcon}
                  alt={showPassword ? "Hide password" : "Show password"}
                  width="24"
                  height="24"
                />
              </InputIcon>
            </InputContainer>
            <ErrorText name="password" component="div" />

            <InputContainer>
              <StyledField
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                error={errors.confirmPassword || confirmPasswordError}
              />
              <InputIcon onClick={handleToggleConfirmPassword}>
                <img
                  src={
                    showConfirmPassword ? hidePasswordIcon : showPasswordIcon
                  }
                  alt={
                    showConfirmPassword
                      ? "Hide confirmPassword"
                      : "Show confirmPassword"
                  }
                  width="24"
                  height="24"
                />
              </InputIcon>
            </InputContainer>
            <ErrorText name="confirmPassword" component="div" />

            <SubmitButton type="submit">Registration</SubmitButton>

            <StyledLink to="/login">
              Already have a account? <StyledSpan>Login</StyledSpan>
            </StyledLink>
          </StyledForm>
          {/* )} */}
        </Container>
      )}
    </Formik>
  );
};

export default RegisterForm;
