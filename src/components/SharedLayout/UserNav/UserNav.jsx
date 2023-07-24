import { Avatar, LogoutBtn, UserName, Wrapper } from "./UserNav.styled";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <Link to="/user">
      <Wrapper>
        <LogoutBtn to="/logout">Log out</LogoutBtn>
        <Avatar />
        <UserName>Anna</UserName>
      </Wrapper>
    </Link>
  );
};

export default UserNav;
