/**
 * eslint-disable react/jsx-no-undef
 *
 * @format
 */


import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";

import { ReactComponent as EditAvatar } from "../../../svg/userPage/camera.svg";
import { ReactComponent as Confirm } from "../../../svg/userPage/confirm.svg";
import { ReactComponent as Decline } from "../../../svg/userPage/decline.svg";

import {
  AvatarFormWrapper,
  ConfirmWrapper,
  EditPhotoBtn,
  UserAvatarImg,
} from "./UserAvatar.styled";

export const UserAvatar = ({ isFormEnable }) => {
  const dispatch = useDispatch();
  // const user = useSelector(user);

  const [isFormatErr, setIsFormatErr] = useState(false);
  const [isImgUpdating, setIsImgUpdating] = useState(false);
  const user = {
    avatar:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  };
  const initialValues = {
    avatar: user.avatar,
  };

  const handleAvatarEditing = () => {
    setIsImgUpdating(true);
  };

  const inputUploadHandler = async (e) => {
    setIsFormatErr(false);

    if (e.target.files[0].type !== "image/jpeg") {
      setIsFormatErr(true);
      return;
    }

    setIsImgUpdating(false);
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);

    // eslint-disable-next-line no-undef
    dispatch(uploadImg(formData));
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
          {({ values, setFieldValue }) => (
            <Form encType='multipart/form-data'>
              <Field
                type='file'
                id='avatar'
                name='avatar'
                accept='image/*'
                value={undefined}
                hidden
              />
              {!isImgUpdating ? (
                <EditPhotoBtn type='button' onClick={handleAvatarEditing}>
                  <EditAvatar />

                  Edit photo
                </EditPhotoBtn>
              ) : (
                <ConfirmWrapper>
                  <button type='submit'>
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
            </Form>
          )}
        </Formik>
      )}
    </AvatarFormWrapper>
  );
};

UserAvatar.propTypes = {
  isFormEnable: PropTypes.bool.isRequired,
};
