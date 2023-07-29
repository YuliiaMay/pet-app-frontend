
/**
 * eslint-disable react/jsx-no-undef
 *
 * @format
 */

import { useEffect, useState } from "react";
import { UserAvatar } from "../../components/Forms/UserForm/UserAvatar";
import { UserForm } from "../../components/Forms/UserForm/UserForm";
import { ReactComponent as CloseSvg } from "../../svg/userPage/close.svg";
import { ReactComponent as EditSvg } from "../../svg/userPage/editProfile.svg";
import { ReactComponent as AddSvg } from "../../svg/userPage/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/authSlice/operations";


import { UserPetsSection } from "./UserPetsSection";
import {
  AddPetLink,
  AddPetWrapper,
  EditButton,
  MyInfoText,
  MyInfoTextWrapper,
  MyPetsText,
  PetCardInfo,
  UserCardInfo,
  UserPageContainer,
} from "./UserPage.styled";
import { selectUser } from "../../redux/authSlice/selectors";

const UserPage = () => {
  const [isUserEditing, setIsUserEditing] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  const handleCloseButton = () => {
    setIsUserEditing(false);
  };

  const handleEditButton = () => {
    setIsUserEditing(true);
  };

  return (
    <UserPageContainer>
      <div>
        <MyInfoTextWrapper>
          <MyInfoText>My information</MyInfoText>
        </MyInfoTextWrapper>
        <UserCardInfo>
          {isUserEditing ? (
            <EditButton type='button' onClick={handleCloseButton}>
              <CloseSvg />
            </EditButton>
          ) : (
            <EditButton type='button' onClick={handleEditButton}>
              <EditSvg />
            </EditButton>
          )}
          <UserAvatar isFormEnable={isUserEditing} />
          <UserForm isFormEnable={isUserEditing} />
        </UserCardInfo>
      </div>
      <div>
        <AddPetWrapper>
          <MyPetsText>My pets</MyPetsText>
          <AddPetLink to='/add-pet'>
            Add Pet
            <AddSvg />
          </AddPetLink>
        </AddPetWrapper>

        <PetCardInfo>
          <UserPetsSection />
        </PetCardInfo>
      </div>
    </UserPageContainer>
  );
};

export default UserPage;
