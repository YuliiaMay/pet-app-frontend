/* eslint-disable no-useless-escape */
/** @format */
import * as yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types'
import { useState } from "react";
// import { ReactComponent as LogOutSvg } from "../../../svg/userPage/logout.svg";

export const UserForm = ({ isFormDisabled }) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const user = {
    name: "Anna",
    email: "anna00@gmail.com",
    birthday: "00.00.0000",
    phone: 38000000000,
    city: "Kiev",
  };
  // const user = useSelector(user);

  const schema = yup.object().shape({
    name: yup.string().min(3).max(30).required(),
    email: yup
      .string()
      .email()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email")
      .required(),
    birthday: yup.string().required(),
    phone: yup.number().min(3).max(30).required(),
    city: yup.string().min(3).max(30).required(),
  });

  const SubmitHandler = (values) => {
    // eslint-disable-next-line no-undef
    dispatch(editUser(values));
  };

  const initialValues = {
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  };

  const handleChange = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={schema}
        onSubmit={SubmitHandler}>
        {({ isSubmitting }) => (
          <UserForm>
            <label htmlFor='name'>
              Name
              <Field
                type='text'
                name='name'
                id='name'
                disabled={isSubmitting || isFormDisabled}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <ErrorMessage name='name' component='div' />

            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              name='email'
              id='email'
              disabled={isSubmitting || isFormDisabled}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='email' component='div' />

            <label htmlFor='birthday'>Birthday</label>
            <Field
              type='date'
              name='birthday'
              id='birthday'
              disabled={isSubmitting || isFormDisabled}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='birthday' component='div' />

            <label htmlFor='phone'>Phone</label>
            <Field
              type='number'
              name='phone'
              id='phone'
              disabled={isSubmitting || isFormDisabled}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='phone' component='div' />

            <label htmlFor='city'>City</label>
            <Field
              type='text'
              name='city'
              id='city'
              disabled={isSubmitting || isFormDisabled}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='city' component='div' />

            {isEditing ? (
              <button type='submit' disabled={isSubmitting || isFormDisabled}>
                Save
              </button>
            ) : (
              <button type='button'>
                <LogOutSvg /> Log Out
              </button>
            )}
          </UserForm>
        )}
      </Formik>
    </div>
  );
};


UserForm.propTypes = {
  isFormDisabled: PropTypes.bool.isRequired,
};