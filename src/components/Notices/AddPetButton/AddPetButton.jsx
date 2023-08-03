import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as PlusSmall } from "../../../images/Icon/PlusSmall.svg";
import ModalAttention from "../../Modals/ModalAttention/ModalAttention";
import { BtnIcon, ButtonAdd } from "./AddPetButton.styled";
import { selectUser } from "../../../redux/authSlice/selectors";

export const AddPetButton = () => {
  const [showModalAttention, setShowModalAttention] = useState(false);
  const { token } = useSelector(selectUser);
  const navigate = useNavigate();

  const handleAddPetClick = () => {
    if (!token) {
      setShowModalAttention(true);
      return;
    }

    navigate("/add-pet");
  };
  return (
    <>
      <ButtonAdd onClick={handleAddPetClick}>
        <span>Add Pet</span>
        <BtnIcon>
          <PlusSmall />
        </BtnIcon>
      </ButtonAdd>
      <ModalAttention
        active={showModalAttention}
        setShow={setShowModalAttention}
      />
    </>
  );
};

export default AddPetButton;
