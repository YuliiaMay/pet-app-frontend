import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import { Container } from "./RegisterPage.styled";
//import { ModalCongrats } from "/src/components/Modals/ModalCongrats";

const RegisterPage = () => {
  return (
    <Container>
      <RegisterForm />
      {/* {? && <ModalCongrats />} */}
    </Container>
  );
};

export default RegisterPage;
