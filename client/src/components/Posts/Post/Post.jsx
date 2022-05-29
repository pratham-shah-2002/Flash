import React, { useState } from "react";
import Comments from "../../Comments/Comments";
import "./Post.css";

const Post = () => {
  const [likeCount, setLikeCount] = useState(1086);
  const [likeClicked, setLikeClicked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <>
      <div className="post df fdc ac">
        <div className="poster df ac">
          <img
            src="/assets/people6.jpg"
            className="ofc"
            alt="Post by"
            width="60px"
            height="60px"
          />
          <div className="poster-username df fdc sa">
            <p className="user-name-post">Alexandria Botez</p>
            <p className="post-time">12 hours ago</p>
          </div>
        </div>
        <div className="post-caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat
          esse expedita officia facilis provident eum dicta vitae alias
          delectus.
        </div>
        <div className="post-img">
          <img src="/assets/sample-post.jpg" alt="Post by" />
        </div>
        <div className="post-like-comment-btn">
          <svg
            height="20"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            id="heartSvg"
            className={likeClicked ? "animate" : ""}
            onClick={() => {
              setLikeClicked(!likeClicked);
              setLikeCount(
                !likeClicked ? likeCount + 1 : likeCount > 0 ? likeCount - 1 : 0
              );
            }}
          >
            <path
              className={likeClicked ? "animatePath" : "normalPath"}
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
          <img
            src="/assets/comment.svg"
            alt="Comment"
            className="comment-btn"
            height="20px"
            width="20px"
            onClick={() => setShowComments(!showComments)}
          />
          <p className="like-cnt">{likeCount} Likes</p>
        </div>
        <div className="comment-section">
          <div className="post-comment df ac">
            <div className="container-comment-section df ac">
              <div className="user-img-comment-section df ac">
                <img
                  src="/assets/people6.jpg"
                  alt="user"
                  height="35px"
                  width="35px"
                  className="ofc"
                />
              </div>
              <div className="write-comment">
                <input
                  type="text"
                  placeholder="Write a comment"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div className="post-comment-btn cp">
                <img src="/assets/post-comment.svg" alt="Post comment" />
              </div>
            </div>
          </div>
          <Comments style={showComments} />
        </div>
      </div>
    </>
  );
};

export default Post;
