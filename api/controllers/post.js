const Post = require("../models/Post.js");
const User = require("../models/User.js");

const createPost = async (req, res) => {
  req.body.userId = req.user;
  try {
    const newPost = await new Post(req.body);
    await newPost.save();
    res.status(200).json({ success: true, newPost });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server Error" });
  }
};

const updatePost = async (req, res) => {
  const Id = req.params.id;
  try {
    let post = await Post.findById(Id);
    if (post.userId !== req.user) {
      return res
        .status(400)
        .json({ success: false, messege: "You can only update your posts" });
    }
    post = await Post.findByIdAndUpdate(Id, req.body);
    res.status(200).json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  const Id = req.params.id;
  try {
    let post = await Post.findById(Id);
    if (post.userId !== req.user) {
      return res
        .status(400)
        .json({ success: false, messege: "You can only delete your posts" });
    }
    post = await Post.findByIdAndDelete(Id, req.body);
    res
      .status(200)
      .json({ success: true, messege: "Post deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server Error" });
  }
};

const likePost = async (req, res) => {
  const id = req.params.id;
  try {
    let post = await Post.findById(id);
    if (!post.likedBy.includes(req.user)) {
      post = await Post.findByIdAndUpdate(id, {
        $push: { likedBy: req.user },
      });
      return res
        .status(200)
        .json({ success: true, messege: "Post has been liked" });
    } else {
      post = await Post.findByIdAndUpdate(id, {
        $pull: { likedBy: req.user },
      });
      res
        .status(200)
        .json({ success: true, messege: "The post has been unliked" });
    }
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server Error" });
  }
};

const commentOnPost = async (req, res) => {
  const postId = req.params.id;
  try {
    let post = await Post.findById(postId);
    console.log(post);
    if (!post) {
      return res
        .status(400)
        .json({ success: false, messege: "Post with the Id not found" });
    }
    const comment = {
      body: req.body.comment,
      commentBy: req.user,
    };
    await Post.findByIdAndUpdate(postId, { $push: { comments: comment } });
    res.status(200).json({ success: true, messege: "Comment Added" });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server error" });
  }
};

const timeline = async (req, res) => {
  const Id = req.user;
  try {
    let user = await User.findById(Id);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, messege: "User does not exist" });
    }
    const userPosts = await Post.find({ userId: Id });

    const timelinePosts = await Promise.all(
      user.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    res
      .status(200)
      .json({ success: true, timeline: timelinePosts.concat(userPosts) });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server error" });
  }
};

module.exports = {
  updatePost,
  deletePost,
  likePost,
  createPost,
  timeline,
  commentOnPost,
};
