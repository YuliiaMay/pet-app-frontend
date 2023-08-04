import { useLocation } from "react-router";
import AddPetMultiStepForm from "../../components/Forms/AddPetForm/AddPetMultiStepForm";
import { useRef } from "react";
import { Overlay } from "./AddPetPage.styled";
import { ResponsiveContainer } from "../../assets/styles/ResponsiveContainer";



const AddPetPage = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const onLeavePage = useRef(location.state?.from ?? '/notices/sell');

  return (
    <ResponsiveContainer>
      <Overlay>
        <AddPetMultiStepForm
          // onLeavePage={onLeavePage}
        />
      </Overlay>      
    </ResponsiveContainer>
  );
};

export default AddPetPage;
