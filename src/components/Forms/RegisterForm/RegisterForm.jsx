import { Formik, Form, Field, ErrorMessage } from "formik";
//import { object, string } from "yup";
import * as Yup from "yup";

import styled from "styled-components";

const Input = styled(Field)`
  margin-right: 20px;
  margin-bottom: 20px;
`;

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

const RegisterForm = () => {
  console.log("email");
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Input type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Input type="text" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Input type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <ErrorMessage name="confirmPassword" component="div" />
        <button type="submit">Registration</button>
        <p>Already have an account? Login</p>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
