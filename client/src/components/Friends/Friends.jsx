import React from "react";
import "./Friends.css";

const Friends = ({ friend_name, friend_profile }) => {
  return (
    <div className="friend df ac">
      <img
        src={friend_profile}
        alt="friend"
        width="45px"
        height="45px"
        className="friend-img"
      />
      <p className="friend-name">{friend_name}</p>
    </div>
  );
};

export default Friends;
