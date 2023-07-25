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
} from "./RegisterForm.styled.js";

const userSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().min(6).email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Container>
        <StyledForm autoComplete="off">
          <StyledTitle>Registration</StyledTitle>
          <StyledField type="text" name="name" placeholder="Name"></StyledField>
          <ErrorText name="name" component="div" />
          <StyledField
            type="text"
            name="email"
            // isInvalid={errors.email && touched.email}
            placeholder="Email"
          ></StyledField>
          <ErrorText name="email" component="div" />
          <StyledField
            type="password"
            name="password"
            placeholder="Password"
          ></StyledField>
          <ErrorText name="password" component="div" />
          <StyledField
            type="password"
            name="confirmPassword"
            placeholder="confirmPassword"
          ></StyledField>

          <ErrorText name="confirmPassword" component="div" />
          <SubmitButton type="submit">Registration</SubmitButton>
          <StyledLink to="/login">
            Already have a account? <StyledSpan>Login</StyledSpan>
          </StyledLink>
        </StyledForm>
      </Container>
    </Formik>
  );
};

export default RegisterForm;
