import React from "react";
import Comment from "./Comment/Comment";
import "./Comments.css";

const Comments = ({ style }) => {
  return (
    <>
      <div
        className="comments"
        className={style ? "showComments" : "hideComments"}
      >
        <Comment />
        <Comment />
        <Comment />
      </div>
    </>
  );
};

export default Comments;
