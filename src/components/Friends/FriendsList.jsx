import { FriendsItem } from "./FriendsItem";
import PropTypes from "prop-types";
import { List, Section } from "./FriendsList.styled";
import { useSelector } from "react-redux";
import { selectFriends } from "../../redux/friendsSlice/selectors";

export const FriendsList = () => {
  const friends = useSelector(selectFriends);

  // console.log(friends);

  return (
    <Section>
      <h1>Our friends</h1>
      {friends.length > 0 && (
        <List>
          {friends.map((friend) => (
            <FriendsItem key={friend._id} {...friend} />
          ))}
        </List>
      )}
    </Section>
  );
};

FriendsList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  workDays: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  addressUrl: PropTypes.string.isRequired,
};
