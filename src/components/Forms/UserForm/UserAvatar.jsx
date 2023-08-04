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
  const [imgToUpload, setImgToUpload] = useState("");

  const [isFormatErr, setIsFormatErr] = useState(false);
  const [isImgUpdating, setIsImgUpdating] = useState(false);

  const initialValues = {
    avatar: avatar,
  };

  const sendFormData = async (newAvatar) => {
    const formData = new FormData();
    formData.append("file", newAvatar);

    await dispatch(updateUser(formData)).then((data) => {
      if (data.error) {
        setIsFormatErr(true);
        setIsImgUpdating(true);
      }
      setIsFormatErr(false);
      setIsImgUpdating(false);
    });
  };

  const handleConfirmBtn = () => {
    setIsImgUpdating(false);
    sendFormData(imgToUpload);
  };

  const inputUploadHandler = async (e) => {
    setIsFormatErr(false);
    setIsImgUpdating(true);

    const newAvatar = e.target.files[0];

    if (newAvatar.type !== "image/jpeg") {
      setIsFormatErr(true);
      setIsImgUpdating(false);
      return;
    }
    const objectUrl = URL.createObjectURL(newAvatar);
    setAvatar(objectUrl);
    setImgToUpload(newAvatar);
    setIsFormatErr(false);
    setIsImgUpdating(true);
  };

  const handleClearAvatar = () => {
    setAvatar("");
    setIsImgUpdating(false);
  };

  return (
    <AvatarFormWrapper bottom={isFormEnable}>
      {isFormatErr && (
        <ErrorText>Something went wrong. Only img can be uploaded</ErrorText>
      )}
      <UserAvatarImg src={avatar} alt="" id="avatar" />
      {isFormEnable && (
        <Formik initialValues={initialValues} onSubmit={inputUploadHandler}>
          {() => (
            <FormAvatar encType="multipart/form-data">
              <FileInput
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                value={""}
                onChange={inputUploadHandler}
                hidden={isImgUpdating}
              />
              {!isImgUpdating ? (
                <EditPhotoBtn type="button">
                  <EditAvatar />
                  Edit photo
                </EditPhotoBtn>
              ) : (
                <ConfirmWrapper bottom={isFormEnable}>
                  <button type="button" onClick={handleConfirmBtn}>
                    <Confirm />
                  </button>

                  <p>Confirm</p>

                  <button type="button" onClick={handleClearAvatar}>
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
