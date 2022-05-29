import React from "react";
import "./Request.css";

const Request = () => {
  return (
    <div className="request df fdc ac">
      <div className="request-container df">
        <div className="requester-img">
          <img
            src="/assets/people4.jpeg"
            alt="requester"
            height="40px"
            width="40px"
          />
        </div>
        <div className="requester-info">
          <span> Requester Name </span>wants to add you to their friends list
        </div>
      </div>

      <div className="request-btn">
        <button className="accept-request-btn cp">Accept</button>
        <button className="reject-request-btn cp">Decline</button>
      </div>
    </div>
  );
};

export default Request;
