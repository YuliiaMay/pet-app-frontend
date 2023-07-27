/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-useless-escape */
/** @format */
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import ModalApproveAction from "../../Modals/ModalApproveAction/ModalApproveAction";

import {
  ErrorText,
  FieldLabel,
  FieldLabelWrapper,
  FormContainer,
  LogOutBtn,
  LogOutSvgStyled,
  StyledField,
  SubmitButton,
  UserFormStyled,
} from "./UserForm.styled";

export const UserForm = ({ isFormEnable }) => {
  const [showModal, setShowModal] = useState(false);

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

  const handleCloseButton = () => {
    setShowModal(true);
  };
  return (
    <>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validate={schema}
          onSubmit={SubmitHandler}
        >
          {({ isSubmitting }) => (
            <UserFormStyled>
              <FieldLabelWrapper>
                <FieldLabel htmlFor="name">Name:</FieldLabel>
                <StyledField
                  type="text"
                  name="name"
                  id="name"
                  disabled={isSubmitting || !isFormEnable}
                />
              </FieldLabelWrapper>
              <ErrorMessage name="name" component="div" />

              <FieldLabelWrapper>
                <FieldLabel htmlFor="email">Email:</FieldLabel>
                <StyledField
                  type="email"
                  name="email"
                  id="email"
                  disabled={isSubmitting || !isFormEnable}
                />
              </FieldLabelWrapper>

              <ErrorText name="email" component="div" />

              <FieldLabelWrapper>
                <FieldLabel htmlFor="birthday">Birthday:</FieldLabel>
                <StyledField
                  type="text"
                  name="birthday"
                  id="birthday"
                  disabled={isSubmitting || !isFormEnable}
                />
              </FieldLabelWrapper>
              <ErrorText name="birthday" component="div" />

              <FieldLabelWrapper>
                <FieldLabel htmlFor="phone">Phone:</FieldLabel>
                <StyledField
                  type="number"
                  name="phone"
                  id="phone"
                  disabled={isSubmitting || !isFormEnable}
                />
              </FieldLabelWrapper>
              <ErrorText name="phone" component="div" />

              <FieldLabelWrapper>
                <FieldLabel htmlFor="city">City:</FieldLabel>
                <StyledField
                  type="text"
                  name="city"
                  id="city"
                  disabled={isSubmitting || !isFormEnable}
                />
              </FieldLabelWrapper>
              <ErrorText name="city" component="div" />

              {isFormEnable ? (
                <SubmitButton
                  type="submit"
                  disabled={isSubmitting || !isFormEnable}
                >
                  Save
                </SubmitButton>
              ) : (
                <LogOutBtn type="button" onClick={handleCloseButton}>
                  <LogOutSvgStyled />
                  Log Out
                </LogOutBtn>
              )}
            </UserFormStyled>
          )}
        </Formik>
      </FormContainer>

      <ModalApproveAction active={showModal} setShow={setShowModal} />
    </>
  );
};

UserForm.propTypes = {
  isFormEnable: PropTypes.bool,
};
