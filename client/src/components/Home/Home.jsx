import React from "react";
import RightBar from "../RightSideBar/RightBar";
import LeftBar from "../LeftSideBar/LeftBar";
import MiddleBar from "../MiddleBar/MiddleBar";
import "./Home.css";
import Profile from "../Profile/Profile";

const Home = ({profile}) => {
  return (
    <div className="home">
      <div className="left">
        <LeftBar />
      </div>
      {!profile && <>
        <div className="center">
          <MiddleBar />
        </div>
        <div className="right">
          <RightBar />
        </div>
      </>}
      {      
        profile && (
          <div className="profile">
            <Profile />
          </div>
        )
      }
    </div>
  );
};

export default Home;
