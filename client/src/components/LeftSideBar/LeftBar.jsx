import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./LeftBar.css";

const LeftBar = ({ profile }) => {
  const [clicked, setClicked] = useState(1);
  const List = styled.li`
  &{
    position: relative;
  }
  &:after {
    content: "";
    position: absolute;
    width: 3px;
    opacity: ${({ clicked }) => (clicked.clicked === clicked.key ? "1" : "0")};
    height: 100%;
    margin: 0;
    background-color: var(--blue);
    padding: 0;
  }
    & > div > img {
      filter: ${({ clicked }) =>
        clicked.clicked === clicked.key ? "var(--svg-blue)" : "none"};
    }
    ,
    & > p {
      color: ${({ clicked }) =>
        clicked.clicked === clicked.key ? "var(--blue)" : "var(--dgray)"};
    }
    ,
  `;
  const navigate = useNavigate();
  return (
    <div
      className="leftbar df ac sa fdc"
      style={
        profile && {
          flexDirection: "row",
        }
      }
    >
      <div className="user-info df ac sa">
        <div
          className="user-info-container df ac se"
          onClick={() => navigate("/profile")}
        >
          <div className="user-image">
            <img src="/assets/people2.jpg" alt="profile" />
          </div>
          <div className="user-name df fdc sb">
            <h4>
              <strong>Alexandria botez</strong>
            </h4>
            <p>@alex_botez</p>
          </div>
        </div>
      </div>
      <div className="page-navigation">
        <ul>
          <List
            clicked={{ clicked, key: 1 }}
            onClick={() => {
              setClicked(1);
              navigate("/");
            }}
            className="df ac cp"
          >
            <div className="list-icon home-icon">
              <img src="/assets/icons-home.svg" alt="user" height="20px" />
            </div>
            <p>Home</p>
          </List>
          <List
            clicked={{ clicked, key: 2 }}
            onClick={() => setClicked(2)}
            className="df ac cp"
          >
            <div className="list-icon">
              <img src="/assets/friends.svg" alt="user" height="20px" />
            </div>
            <p>Friends</p>
          </List>
          <List
            clicked={{ clicked, key: 3 }}
            onClick={() => {
              setClicked(3);
              navigate("/profile");
            }}
            className="df ac cp"
          >
            <div className="list-icon">
              <img src="/assets/user.svg" alt="user" height="20px" />
            </div>
            <p>Profile</p>
          </List>
          <List
            clicked={{ clicked, key: 4 }}
            onClick={() => setClicked(4)}
            className="df ac cp"
          >
            <div className="list-icon">
              <img src="/assets/setting2.svg" alt="setting" height="20px" />
            </div>
            <p>Setting</p>
          </List>
        </ul>
      </div>
      <div className="advertisment df fdc">
        <img src="/assets/typing.png" alt="woman" className="ad-img" />
        {/* <div className="ad-des">This is Add discription</div> */}
      </div>
    </div>
  );
};

export default LeftBar;
