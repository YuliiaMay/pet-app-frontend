import { useState } from "react";
import { UserAvatar } from "../../components/Forms/UserForm/UserAvatar";
import { UserForm } from "../../components/Forms/UserForm/UserForm";
import { ReactComponent as CloseSvg } from '../../svg/userPage/close.svg'
import { ReactComponent as EditSvg } from '../../svg/userPage/editProfile.svg'
import { ReactComponent as AddSvg } from "../../svg/userPage/add.svg";
import { UserPetsSection } from "./UserPetsSection";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleCloseButton = () => {
    setIsUserEditing(false);
  }

  const handleEditButton = () => {
    setIsUserEditing(true);
  };

  return (
    <>
      <div>
        <h2>My information</h2>
        <div className='userCard'>
          {isUserEditing ? (
            <button type='button' onClick={handleCloseButton}>
              <CloseSvg />
            </button>
          ) : (
            <button type='button' onClick={handleEditButton}>
              <EditSvg />
            </button>
          )}
          <UserAvatar isFormDisabled={isUserEditing} />
          <UserForm isFormDisabled={isUserEditing} />
        </div>
      </div>
      <div>
        <h2>My pets</h2>
        <Link to="..add pet page">
          Add Pet
          <AddSvg />
        </Link>
        <UserPetsSection />
      </div>
    </>
  );
};

export default UserPage;
