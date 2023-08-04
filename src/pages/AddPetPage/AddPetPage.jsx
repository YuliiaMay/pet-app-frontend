
import AddPetMultiStepForm from "../../components/Forms/AddPetForm/AddPetMultiStepForm";

import { Overlay } from "./AddPetPage.styled";




const AddPetPage = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const onLeavePage = useRef(location.state?.from ?? '/notices/sell');

  return (

      <Overlay>
        <AddPetMultiStepForm
          // onLeavePage={onLeavePage}
        />
      </Overlay>      

  );
};

export default AddPetPage;
