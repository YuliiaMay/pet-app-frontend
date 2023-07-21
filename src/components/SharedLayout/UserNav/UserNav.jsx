import { AuthList, LogInBtn, RegisterBtn } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <AuthList>
      <LogInBtn to="/login">Log IN</LogInBtn>
      <RegisterBtn to="/register">Registration</RegisterBtn>
    </AuthList>
  );
};
