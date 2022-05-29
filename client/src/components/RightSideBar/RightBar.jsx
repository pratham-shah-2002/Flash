import React from "react";
import "./RightBar.css";
import Request from "../Requests/Request";
import Friends from "../Friends/Friends";
import Friend from "./people5.jpg";
const RightBar = () => {
  return (
    <>
      <div className="rightbar df ac fdc">
        <p className="rightbar-heading"> REQUESTS</p>
        <div className="request-section df ac fdc">
          <Request />
          <Request />
          <Request />
        </div>
        <p className="rightbar-heading"> FRIENDS</p>
        <div className="friends-list">
          <Friends friend_name="Laura Fisher" friend_profile={Friend} />
          <Friends friend_name="Sam Smith" friend_profile={Friend} />
          <Friends friend_name=" Monkey D Luffy" friend_profile={Friend} />
          <Friends friend_name="Nami" friend_profile={Friend} />
        </div>
      </div>
    </>
  );
};

export default RightBar;
