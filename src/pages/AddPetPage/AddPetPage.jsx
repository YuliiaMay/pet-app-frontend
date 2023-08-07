
import AddPetMultiStepForm from "../../components/Forms/AddPetForm/AddPetMultiStepForm";

import { Overlay } from "./AddPetPage.styled";




const AddPetPage = () => {
  return (
      <Overlay>
        <AddPetMultiStepForm />
      </Overlay>      
  );
};

export default AddPetPage;
