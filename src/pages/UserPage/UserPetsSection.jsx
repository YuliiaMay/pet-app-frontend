/** @format */

// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";

import { DeleteBtn, PetImg, PetInfoCard, PetInfoDescription, PetInfoPart, PetInfoTextName, UserPetsList } from "./UserPetsSection.styled";
import { ReactComponent as Delete } from "../../svg/userPage/delete.svg";
import { selectUser } from "../../redux/authSlice/selectors";
import { deletePet} from "../../redux/authSlice/operations";
import { useState } from "react";


export const UserPetsSection = () => {
  const user = useSelector(selectUser);
  const [pets, setPets] = useState(user.pets);

  const dispatch = useDispatch();

  const deleteClickHandler = async(id) => {
    await dispatch(deletePet(id)).then((responce) =>
      setPets(responce.payload)
    );
  };


  return (
    <UserPetsList>
      {pets.map((pet) => {
        return (
          <PetInfoCard key={pet._id}>
            <PetImg src={pet.imgUrl} alt='' />
            <div>
              <PetInfoPart>
                <DeleteBtn
                  type='button'
                  onClick={() => deleteClickHandler(pet._id)}>
                  <Delete />
                </DeleteBtn>
                <PetInfoTextName>Name: </PetInfoTextName>
                <PetInfoDescription>{pet.name}</PetInfoDescription>
              </PetInfoPart>
              <PetInfoPart>
                <PetInfoTextName>Date of birth: </PetInfoTextName>
                <PetInfoDescription>{pet.birthday}</PetInfoDescription>
              </PetInfoPart>
              <PetInfoPart>
                <PetInfoTextName>Type: </PetInfoTextName>
                <PetInfoDescription>{pet.type}</PetInfoDescription>
              </PetInfoPart>
              <PetInfoPart>
                <PetInfoTextName>Comments: </PetInfoTextName>
                <PetInfoDescription>{pet.comments}</PetInfoDescription>
              </PetInfoPart>
            </div>
          </PetInfoCard>
        );
      })}
    </UserPetsList>
  );
};

