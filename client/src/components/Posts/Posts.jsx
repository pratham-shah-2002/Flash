import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <>
      <div className="posts">
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Posts;
