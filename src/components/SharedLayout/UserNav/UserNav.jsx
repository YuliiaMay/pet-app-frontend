import { Wrapper, AuthList, LogInBtn, RegisterBtn } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <Wrapper>
      <AuthList>
        <li>
          <LogInBtn type="button">Log IN</LogInBtn>
        </li>
        <li>
          <RegisterBtn type="button">Registration</RegisterBtn>
        </li>
      </AuthList>
    </Wrapper>
  );
};
