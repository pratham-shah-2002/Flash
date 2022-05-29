import React from "react";
import "./Comment.css";

const Comment = () => {
  return (
    <>
      <div className="commenter-info df">
        <div className="commenter-img">
          <img
            src="/assets/people5.jpg"
            alt="Profile pic"
            height="35px"
            width="35px"
            className="ofc"
          />
        </div>
        <div className="commenter-info-comments">
          <span className="commenter-username">Emma watson</span>
          <span className="commenter-comment">
            Wow!! What a scenary Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem doloribus nemo sapiente sequi repellendus
            nesciunt error doloremque, a optio repellat ipsum unde modi maiores
            earum.
          </span>
          <div className="commentedAt">4 minutes ago</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
