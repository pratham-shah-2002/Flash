import React from "react";
import Posts from "../Posts/Posts";
import "./MiddleBar.css";
const MiddleBar = () => {
  return (
    <>
      <div className="middlebar df fdc ac">
        <div className="new-post df sb ac">
          <div className="container-middlebar df ac sa">
            <div className="user-img">
              <img src="/assets/people6.jpg" alt="user" />
            </div>
            <div className="caption">
              <input
                type="text"
                placeholder="What's new, Alexandria?"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="post-btn">
            <button className="df ac se cp">
              <img src="/assets/post.svg" alt="post it" />
              Post it!!
            </button>
          </div>
        </div>
        <div className="friends-posts">
          <Posts />
        </div>
      </div>
    </>
  );
};

export default MiddleBar;
