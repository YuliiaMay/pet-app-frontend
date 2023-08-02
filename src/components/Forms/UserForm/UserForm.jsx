/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-useless-escape */
/** @format */
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import ModalApproveAction from "../../Modals/ModalApproveAction/ModalApproveAction";

import {
  ErrorText,
  FieldLabel,
  FieldLabelWrapper,
  InputContainer,
  LogOutBtn,
  LogOutSvgStyled,
  StyledField,
  SubmitButton,
  UserFormStyled,
} from "./UserForm.styled";
import { updateUser } from "../../../redux/authSlice/operations";
import { selectUser } from "../../../redux/authSlice/selectors";

export const UserForm = ({ isFormEnable }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const schema = yup.object().shape({
    name: yup.string().min(3).max(30).required(),
    email: yup
      .string()
      .email()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email")
      .required(),
    birthday: yup.date().required(),
    phone: yup.string().min(3).max(30).required(),
    city: yup.string().min(3).max(30).required(),
  });

  const SubmitHandler = async (values) => {
    await dispatch(updateUser(values));
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
      <div>
        <Formik
          initialValues={initialValues}
          validate={() => {
            schema;
          }}
          onSubmit={SubmitHandler}
        >
          {({ isSubmitting }) => (
            <UserFormStyled>
              <InputContainer>
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
                    type="date"
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
              </InputContainer>
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
      </div>

      <ModalApproveAction active={showModal} setShow={setShowModal} />
    </>
  );
};

UserForm.propTypes = {
  isFormEnable: PropTypes.bool,
};
