import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import { Container } from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <Container>
      <RegisterForm />
      {/* {? && <ModalCongrats />} */}
    </Container>
  );
};

export default RegisterPage;
