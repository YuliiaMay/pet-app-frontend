/**
 * eslint-disable react/jsx-no-undef
 *
 * @format
 */

/** @format */

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { ReactComponent as EditAvatar } from "../../../svg/userPage/camera.svg";
import { ReactComponent as Confirm } from "../../../svg/userPage/confirm.svg";
import { ReactComponent as Decline } from "../../../svg/userPage/decline.svg";

import {
  AvatarFormWrapper,
  ConfirmWrapper,
  EditPhotoBtn,
  FileInput,
  FormAvatar,
  UserAvatarImg,
} from "./UserAvatar.styled";
import { selectUser } from "../../../redux/authSlice/selectors";
import { updateUser } from "../../../redux/authSlice/operations";

export const UserAvatar = ({ isFormEnable }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [isFormatErr, setIsFormatErr] = useState(false);
  const [isImgUpdating, setIsImgUpdating] = useState(false);
  // const [isConfirm, setIsConfirm] = useState(false);

  const initialValues = {
    avatar: user.avatar,
  };

  const handleAvatarEditing = () => {
    setIsImgUpdating(true);

  };

  const inputUploadHandler = async (e) => {
    handleAvatarEditing();
    setIsFormatErr(false);

    if (e.target.files[0].type !== "image/jpeg") {
      setIsFormatErr(true);
      return;
    }

    setIsImgUpdating(false);
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);

    await dispatch(updateUser(formData)).then(() => '');

  };

  const handleClearAvatar = (setFieldValue) => {
    setFieldValue("avatar", null);
    setIsImgUpdating(false);
  };

  return (
    <AvatarFormWrapper>
      {isFormatErr && <p>Only img can be uploaded</p>}
      <UserAvatarImg src={user.avatar} alt='' />
      {isFormEnable && (
        <Formik initialValues={initialValues} onSubmit={inputUploadHandler}>
          {({ values, setFieldValue}) => (
            <FormAvatar encType='multipart/form-data'>
              <FileInput
                type='file'
                id='avatar'
                name='avatar'
                accept='image/*'
                value={""}
                onChange={inputUploadHandler}
                // dispatch={isSubmitting || isImgUpdating}
                // hidden={isImgUpdating}
              />
              {!isImgUpdating ? (
                <EditPhotoBtn type='button'>
                  <EditAvatar />
                  Edit photo
                </EditPhotoBtn>
              ) : (
                <ConfirmWrapper hidden>
                  <button type='button'>
                    <Confirm />
                  </button>

                  <p>Confirm</p>

                  {values.avatar && (
                    <button
                      type='button'
                      onClick={() => handleClearAvatar(setFieldValue)}>
                      <Decline />
                    </button>
                  )}
                </ConfirmWrapper>
              )}
            </FormAvatar>
          )}
        </Formik>
      )}
    </AvatarFormWrapper>
  );
};

UserAvatar.propTypes = {
  isFormEnable: PropTypes.bool.isRequired,
};
