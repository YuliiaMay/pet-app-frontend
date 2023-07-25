//import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
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
} from "./LoginForm.styled.js";

const userSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Container>
        <StyledForm autoComplete="off">
          <StyledTitle>Login</StyledTitle>
          <StyledField
            type="text"
            name="email"
            placeholder="Email"
          ></StyledField>
          <ErrorText name="email" component="div" />
          <StyledField
            type="password"
            name="password"
            placeholder="Password"
          ></StyledField>
          <ErrorText name="password" component="div" />
          <SubmitButton type="submit">Login</SubmitButton>
          <StyledLink to="/register">
            Does not have an account? <StyledSpan>Registration</StyledSpan>
          </StyledLink>
        </StyledForm>
      </Container>
    </Formik>
  );
};
export default LoginForm;
