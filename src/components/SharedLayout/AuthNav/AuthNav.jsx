import {
  AuthList,
  BtnWrapper,
  LogInBtn,
  PawIcon,
  RegisterBtn,
} from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthList>
      <BtnWrapper>
        <LogInBtn to="/login">
          Log IN
          <PawIcon />
        </LogInBtn>
        <RegisterBtn to="/register">Registration</RegisterBtn>
      </BtnWrapper>
    </AuthList>
  );
};
