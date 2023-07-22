import { AuthList, LogInBtn, PawIcon, RegisterBtn } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <AuthList>
      <LogInBtn to="/login">
        Log IN
        <PawIcon />
      </LogInBtn>
      <RegisterBtn to="/register">Registration</RegisterBtn>
    </AuthList>
  );
};
