import { useLocation } from "react-router";
import AddPetMultiStepForm from "../../components/Forms/AddPetForm/AddPetMultiStepForm";
import { useRef } from "react";


const AddPetPage = () => {
  const location = useLocation();
  const leaveAddPetForm = useRef(location.state?.from ?? 'notices/sell');

  return (
    <>
      <AddPetMultiStepForm leaveAddPetForm={leaveAddPetForm} />
    </>
  );
};

export default AddPetPage;
