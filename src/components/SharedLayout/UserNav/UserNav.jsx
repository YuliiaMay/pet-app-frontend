import PropTypes from "prop-types";
import { Icon } from "../../Icon/Icon";
import {
  Avatar,
  Box,
  LogoutBtn,
  UserLink,
  UserName,
  Wrapper,
} from "./UserNav.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/authSlice/selectors";

const UserNav = ({ toggleMenu }) => {
  const {user} = useSelector(selectUser);

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
      <UserLink to="/user" onClick={toggleMenu}>
        <Box>
          <Avatar />
          <UserName>{user.name}</UserName>
        </Box>
      </UserLink>
    </Wrapper>
  );
};

export default UserNav;
UserNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
