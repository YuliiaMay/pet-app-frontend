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
  ErrorText,
  FileInput,
  FormAvatar,
  UserAvatarImg,
} from "./UserAvatar.styled";
import { selectUser } from "../../../redux/authSlice/selectors";
import { updateUser } from "../../../redux/authSlice/operations";

export const UserAvatar = ({ isFormEnable }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [avatar, setAvatar] = useState(user.avatar || "");

  const [isFormatErr, setIsFormatErr] = useState(false);
  const [isImgUpdating, setIsImgUpdating] = useState(false);

  const initialValues = {
    avatar: avatar,
  };

  const handleConfirmBtn = () => {
    setIsImgUpdating(false);
}

  const inputUploadHandler = async (e) => {
    setIsFormatErr(false);
    setIsImgUpdating(true);

    if (e.target.files[0].type !== "image/jpeg") {
      setIsFormatErr(true);
      return;
    }

    setIsImgUpdating(false);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    await dispatch(updateUser(formData))
      .then((data) => {
        if (data.error) {
          setIsFormatErr(true);
          setIsImgUpdating(false);
        } 
          setIsFormatErr(false);
          setIsImgUpdating(true);
      })
  };

  const handleClearAvatar = (setFieldValue) => {
    console.log(setFieldValue)
    setFieldValue("avatar", '');
    setAvatar('');
    setIsImgUpdating(false);
  };


  return (
    <AvatarFormWrapper>
      {isFormatErr && (
        <ErrorText>Something went wrong. Only img can be uploaded</ErrorText>
      )}
      <UserAvatarImg src={avatar} alt='' />
      {isFormEnable && (
        <Formik initialValues={initialValues} onSubmit={inputUploadHandler}>
          {({ setFieldValue}) => (
            <FormAvatar encType='multipart/form-data'>
              <FileInput
                type='file'
                id='avatar'
                name='avatar'
                accept='image/*'
                value={""}
                onChange={inputUploadHandler}
                disable={isImgUpdating}
                hidden={isImgUpdating}
              />
              {!isImgUpdating ? (
                <EditPhotoBtn type='button'>
                  <EditAvatar />
                  Edit photo
                </EditPhotoBtn>
              ) : (
                <ConfirmWrapper>
                    <button
                    type='button'
                    onClick={handleConfirmBtn}>
                    <Confirm />
                  </button>

                  <p>Confirm</p>

                    <button
                      type='button'
                      onClick={()=> handleClearAvatar(setFieldValue)}>
                      <Decline />
                    </button>
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
