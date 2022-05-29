const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    likedBy: {
      type: Array,
      default: [],
    },
    caption: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    comments: [
      {
        body: String,
        createdAt: String,
        commentBy: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
