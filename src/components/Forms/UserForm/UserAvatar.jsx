/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { ReactComponent as EditAvatar } from "../../../svg/userPage/camera.svg";
import { ReactComponent as Confirm } from "../../../svg/userPage/confirm.svg";
import { ReactComponent as Decline } from "../../../svg/userPage/decline.svg";

export const UserAvatar = ({ isFormDisabled }) => {
  const dispatch = useDispatch();
  const user = useSelector(user);

  const [isFormatErr, setIsFormatErr] = useState(false);
  const [isImgUpdating, setIsImgUpdating] = useState(false);

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
    <>
      {isFormatErr && <p>Only img can be uploaded</p>}

      <img src={user.avatar} alt='' accept='image/*' />
      {!isFormDisabled && (
        <Formik initialValues={initialValues} onSubmit={inputUploadHandler}>
          {({ values, setFieldValue }) => (
            <Form encType='multipart/form-data'>
              <Field type='file' id='avatar' name='avatar' />
              {!isImgUpdating ? (
                <button type='button' onClick={handleAvatarEditing}>
                  <EditAvatar />
                  Edit photo
                </button>
              ) : (
                <>
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
                </>
              )}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

UserAvatar.propTypes = {
  isFormDisabled: PropTypes.bool.isRequired,
};