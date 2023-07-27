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
// import useAuth from "../../../redux/authSlice/useAuth";

// import { useAuth } from "../../../redux/authSlice/useAuth";

const UserNav = ({ toggleMenu }) => {
  console.log("UserNav rendering");
  // const { user } = useAuth();
  // console.log(user.user);
  const user = useSelector(selectUser);
  // const { isLoggedIn, user } = useAuth();
  console.log(user.user.name);
  const dispatch = useDispatch();
  if (!user) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }
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
          {user && user.user.name ? (
            <div>{user.user.name}</div>
          ) : (
            <div>No user data</div>
          )}
          {/* <UserName>{user.name}</UserName> */}
        </Box>
      </UserLink>
    </Wrapper>
  );
};

export default UserNav;
UserNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
