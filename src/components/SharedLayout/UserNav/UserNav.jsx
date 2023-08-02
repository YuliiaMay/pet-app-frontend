import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/authSlice/selectors";
import { Icon } from "../../Icon/Icon";
import {
  Avatar,
  Box,
  LogoutBtn,
  UserLink,
  UserName,
  Wrapper,
} from "./UserNav.styled";

import { logout } from "../../../redux/authSlice/operations";

const UserNav = ({ toggleMenu }) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <LogoutBtn to="/logout" onClick={() => dispatch(logout())}>
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
          {user.name ? (
            <UserName>{user.name}</UserName>
          ) : (
            <div>No user data</div>
          )}
        </Box>
      </UserLink>
    </Wrapper>
  );
};

export default UserNav;
UserNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
