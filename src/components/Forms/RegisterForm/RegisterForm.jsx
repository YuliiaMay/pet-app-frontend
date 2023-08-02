import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/authSlice/operations";
import * as Yup from "yup";

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
  //InputIconDisabled,
} from "./RegisterForm.styled.js";
import { ModalCongrats } from "/src/components/Modals/ModalCongrats/ModalCongrats";

import showPasswordIcon from "/src/svg/registerPage/eyeOpen.svg";
import hidePasswordIcon from "/src/svg/registerPage/eyeClosed.svg";
import successIcon from "/src/svg/registerPage/check.svg";
import errorIcon from "/src/svg/registerPage/cross.svg";
//import hidePasswordIconDisabled from "/src/svg/registerPage/eyeClosedDisabled.svg";

const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password mast be at least 6 characters")
    .max(16, "Password can not have more then 16 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Conformation is required")
    .min(4)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
  // const handleSubmit = ({ name, email, password }, { resetForm }) => {
  //   dispatch(register({ name, email, password })).then((response) => {
  //     if (response.error) {
  //       setErrorMessage("Registration failed. Please try again later.");
  //     } else {
  //       setErrorMessage("");
  //       resetForm();
  //     }
  //   });
  // };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  //const [isRegistered, setIsRegistered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Container>
          <StyledTitle>Registration</StyledTitle>
          <StyledForm autoComplete="off">
            <StyledField
              type="text"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              border={errors.name && touched.name && "1px solid red"}
            />
            <ErrorText name="name" component="div" />

            <InputContainer>
              <StyledField
                type="text"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
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
                value={values.password}
                placeholder="Password"
                onBlur={handleBlur}
                error={errors.password || passwordError}
                border={errors.password && touched.password && "1px solid red"}
              />
              {!errors.password && (
                <InputIconSuccess>
                  <img src={successIcon} alt="success" />
                </InputIconSuccess>
              )}
              {/* {!errors.password && errors.password !== "" && (
                <InputIconSuccess>
                  <img src={successIcon} alt="success" />
                </InputIconSuccess> */}
              {/* // ) && (
                //   <InputIconDisabled>
                //     <img src={hidePasswordIcon} alt="disabled" />
                //   </InputIconDisabled>
                // ) && (
                //   <InputIconShow isVisible={"opacity:0"}>
                //     <img src={hidePasswordIcon} alt="disabled" />
                //   </InputIconShow>
              )} */}
              <InputIconShow onClick={handleTogglePassword}>
                <img
                  src={showPassword ? showPasswordIcon : hidePasswordIcon}
                  alt={showPassword ? "Show password" : "Hide password"}
                />
              </InputIconShow>
            </InputContainer>
            <ErrorText name="password" component="div" />

            <InputContainer>
              <StyledField
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  "1px solid red"
                }
                error={errors.confirmPassword || confirmPasswordError}
              />
              {!errors.confirmPassword && (
                <InputIconSuccess>
                  <img src={successIcon} alt="success" />
                </InputIconSuccess>
              )}
              <InputIconShow onClick={handleToggleConfirmPassword}>
                <img
                  src={
                    showConfirmPassword ? showPasswordIcon : hidePasswordIcon
                  }
                  alt={
                    showConfirmPassword
                      ? "Show confirmPassword"
                      : "Hide confirmPassword"
                  }
                />
              </InputIconShow>
            </InputContainer>
            <ErrorText name="confirmPassword" component="div" />
            <>
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                onClick={openModal}
              >
                Registration
              </SubmitButton>
              <ModalCongrats isOpen={isModalOpen} onClose={closeModal} />
            </>
            <StyledLink to="/login">
              Already have a account? <StyledSpan>Login</StyledSpan>
            </StyledLink>
          </StyledForm>
        </Container>
      )}
    </Formik>
  );
};

export default RegisterForm;
