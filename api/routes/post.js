const router = require("express").Router();
const {
  updatePost,
  deletePost,
  likePost,
  createPost,
  commentOnPost,
  timeline,
  fetchRequests,
} = require("../controllers/post.js");
const fetchUser = require("../middleware/fetchUser.js");

router
  .get("/", fetchUser, timeline)
  .post("/createpost", fetchUser, createPost)
  .put("/:id", fetchUser, updatePost)
  .delete("/:id", fetchUser, deletePost)
  .put("/like/:id", fetchUser, likePost)
  .put("/comment/:id", fetchUser, commentOnPost);

module.exports = router;
