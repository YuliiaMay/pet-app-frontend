import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().min(6).max(12).email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().min(8).required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Input = styled(Field)`
  margin: 20px;
`;
const RegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form autoComplete="off">
        <Input type="text" name="name" placeholder="Name"></Input>
        <ErrorMessage name="name" component="div" />
        <Input type="text" name="email" placeholder="Email"></Input>
        <ErrorMessage name="email" component="div" />
        <Input type="password" name="password" placeholder="Password"></Input>
        <ErrorMessage name="password" component="div" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
        ></Input>
        <ErrorMessage name="confirmPassword" component="div" />
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
