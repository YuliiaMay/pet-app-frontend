import { ReactComponent as PlusSmall } from "../../../images/Icon/PlusSmall.svg";
import { BtnIcon, ButtonAdd } from "./AddPetButton.styled";

export const AddPetButton = () => {
  return (
    <ButtonAdd to="/add-pet">
      <span>Add Pet</span>
      <BtnIcon>
        <PlusSmall />
      </BtnIcon>
    </ButtonAdd>
  );
};

export default AddPetButton;
