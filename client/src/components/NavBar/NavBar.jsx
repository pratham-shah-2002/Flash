import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container df ac sb">
      <div className="navbar-left">
        <div className="navbar-app-info df ac sa">
          <img
            src="/assets/app-icon.svg"
            alt="icon"
            height="32px"
            width="32px"
          />
          <h2>Social Media</h2>
        </div>
      </div>
      <div className="navbar-right df ac sa">
        <div className="navbar-search df">
          <img src="/assets/search.svg" alt="serch" className="cp" />
          <input
            type="text"
            placeholder="Search"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div className="navbar-create-btn df ac se cp">
          <img src="/assets/add.svg" alt="+" />
          Create
        </div>
        <div className="navbar-user-photo cp">
          <img src="/assets/people6.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
