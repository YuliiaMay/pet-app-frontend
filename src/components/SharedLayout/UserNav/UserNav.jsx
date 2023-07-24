import { Icon } from "../../Icon/Icon";
import { Avatar, LogoutBtn, UserName, Wrapper } from "./UserNav.styled";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (

    <Wrapper>
      <LogoutBtn to="/logout">
        Log out
        <Icon
          iconName={"icon-logout"}
          width={"24px"}
          height={"24px"}
          stroke={"#ffffff"}
          fill={"#ffffff"}
        />
      </LogoutBtn>
      <Avatar />
      <UserName>Anna</UserName>
    </Wrapper>

  );
};

export default UserNav;
