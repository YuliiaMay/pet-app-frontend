import { Avatar, LogoutBtn, UserName, Wrapper } from "./UserNav.styled";

const UserNav = () => {
  return (
    <Wrapper>
      <LogoutBtn to="/logout">Log out</LogoutBtn>
      <Avatar />
      <UserName>Anna</UserName>
    </Wrapper>
  );
};

export default UserNav;
