import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFriends } from "../../redux/friendsSlice/operations";

import { FriendsList } from "../../components/Friends/FriendsList/FriendsList";

const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return <FriendsList />;
};

export default FriendsPage;
