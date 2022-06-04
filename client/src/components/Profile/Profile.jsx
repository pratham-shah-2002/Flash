import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div>
        <div className="profile_wrapper">
          <div className="profile_view_wrapper">
            <div className="profile_image_wrapper">
              <img src="/assets/people2.jpg" alt="" className="profile_image" />
            </div>
            <div className="profile_info_wrapper">
              <div className="profile_info">
                <div className="info_count">10</div>
                <div className="info_title">Posts</div>
              </div>
              <div className="profile_info">
                <div className="info_count">465</div>
                <div className="info_title">Followers</div>
              </div>
              <div className="profile_info">
                <div className="info_count">451</div>
                <div className="info_title">Following</div>
              </div>
            </div>
          </div>
          <div className="profile_name_wrapper">
            <div className="profile_name">Alexandra Botez</div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="profile_post_wrapper">
          <div className="profile_posts">
            {[...Array(9).keys()].slice(1).map((item) => {
              return (
                <div class="box">
                  <div
                    className="post_item"
                    style={{
                      backgroundImage: `url('/assets/post${item}.jpg')`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
