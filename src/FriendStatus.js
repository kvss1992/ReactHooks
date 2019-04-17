import { useState, useEffect } from "react";
import ChatAPI from "./chatAPI";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friendId, handleStatusChange);

    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friendId, handleStatusChange);
    };
  }, [props.friendId]);

  if (isOnline === null) {
    return "Loading ....";
  }

  return isOnline ? "Online" : "offline";
}

export default FriendStatus;
