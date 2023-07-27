// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchFriends } from "../../redux/friendsSlice/operations";

import { FriendsList } from "../../components/Friends/FriendsList";

const FriendsPage = () => {
  // const [friendsList, setFriendsList] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(friends);
  // }, [dispatch]);

  // useEffect(() => {
  //   setFriendsList(fetchFriends());
  // }, []);

  // console.log(friendsList);
  return (
    <>
      <FriendsList />
    </>
  );
};

export default FriendsPage;
