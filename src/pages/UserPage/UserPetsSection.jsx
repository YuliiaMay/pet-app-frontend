/** @format */

// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";

import { DeleteBtn, PetImg, PetInfoCard, PetInfoDescription, PetInfoPart, PetInfoTextName } from "./UserPetsSection.styled";
import { ReactComponent as Delete } from "../../svg/userPage/delete.svg";


export const UserPetsSection = () => {
  // const user = useSelector(user);
  const dispatch = useDispatch();
  const pets = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
      name: "gggggggg",
      dateofbirth: "gggggggggg",
      type: "ggggggggg",
      comments: "gggggggggggggg",
    },
  ];

  const deleteClickHandler = (e) => {
    // eslint-disable-next-line no-undef
    dispatch(deletePetFromFavorite(e.target.id));
  };
  return (
    <div>
      {pets.map((pet) => {
        return (
          <PetInfoCard key={pet.id}>
            <div>
              <PetImg src={pet.img} alt='' />
              <div>
                <PetInfoPart>
                  <DeleteBtn type='button' onClick={deleteClickHandler}>
                    <Delete />
                  </DeleteBtn>
                  <PetInfoTextName>Name: </PetInfoTextName>
                  <PetInfoDescription>{pet.name}</PetInfoDescription>
                </PetInfoPart>
                <PetInfoPart>
                  <PetInfoTextName>Date of birth: </PetInfoTextName>
                  <PetInfoDescription>{pet.dateofbirth}</PetInfoDescription>
                </PetInfoPart>
                <PetInfoPart>
                  <PetInfoTextName>Type: </PetInfoTextName>
                  <PetInfoDescription>{pet.type}</PetInfoDescription>
                </PetInfoPart>
                <PetInfoPart>
                  <PetInfoTextName>Date of birth: </PetInfoTextName>
                  <PetInfoDescription>{pet.dateofbirth}</PetInfoDescription>
                </PetInfoPart>
                <PetInfoPart>
                  <PetInfoTextName>Comments: </PetInfoTextName>
                  <PetInfoDescription>{pet.comments}</PetInfoDescription>
                </PetInfoPart>
              </div>
            </div>
          </PetInfoCard>
        );
      })}
    </div>
  );
};

