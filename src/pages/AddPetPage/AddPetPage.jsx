import { useLocation } from "react-router";
import AddPetMultiStepForm from "../../components/Forms/AddPetForm/AddPetMultiStepForm";
import { useRef } from "react";
import { Overlay } from "./AddPetPage.styled";

const AddPetPage = () => {
  const location = useLocation();
  const leaveAddPetForm = useRef(location.state?.from ?? "notices/sell");

  return (
    <Overlay>
      <AddPetMultiStepForm leaveAddPetForm={leaveAddPetForm} />
    </Overlay>
  );
};

export default AddPetPage;
