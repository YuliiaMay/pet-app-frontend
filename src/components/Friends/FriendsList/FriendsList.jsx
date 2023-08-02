import { FriendsItem } from "../FriendsItem/FriendsItem";
import { List, Section } from "./FriendsList.styled";
import { useSelector } from "react-redux";
import { selectFriends } from "../../../redux/friendsSlice/selectors";

export const FriendsList = () => {
  const friends = useSelector(selectFriends);

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
