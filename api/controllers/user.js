const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { findByIdAndUpdate } = require("../models/User.js");

const sendRequest = async (req, res) => {
  const requestedUser = req.body.requestedUser;
  try {
    let user = await User.findById(requestedUser);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, messege: "User not found" });
    }
    user = await User.findByIdAndUpdate(requestedUser, {
      $push: { requests: req.user },
    });
    res
      .status(200)
      .json({ success: true, messege: "Follow request has been sent" });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server error" });
  }
};
const requestAction = async (req, res) => {
  let requestedBy = req.body.requestedBy;
  let user = await User.findById(requestedBy);
  if (!user) {
    return res.status(400).json({ success: false, messege: "User not found" });
  }
  if (req.body.requestAction === "Delete") {
    user = await findByIdAndUpdate(req.user, {
      $pop: { requests: requestedBy },
    });
    return res
      .status(200)
      .json({ success: true, messege: "User request deleted" });
  }
  user = await User.findByIdAndUpdate(req.user, {
    $push: { followers: requestedBy },
  });
  let friend = await User.findByIdAndUpdate(req.body.requestedBy, {
    $push: { following: req.user },
  });
  user = await findByIdAndUpdate(req.user, {
    $pop: { requests: requestedBy },
  });
  res
    .status(200)
    .json({ success: true, messege: "User request has been accepted" });
};
const fetchRequests = async (req, res) => {
  const id = req.user;
  let user = await User.findById(id);
  if (!user) {
    return res.status(400).json({ success: false, messege: "No User found" });
  }
  if (!user.requests) {
    return res
      .status(200)
      .json({ success: true, messege: "No requests have currently been made" });
  }
  res.status(200).json({ success: true, requests: user.requests });
};

const updateUser = async (req, res) => {
  const Id = req.params.id;
  if (req.user !== Id) {
    return res
      .status(400)
      .json({ success: false, messege: "You can only update your account" });
  }
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    req.body.password = password;
  }
  try {
    const user = await User.findByIdAndUpdate(Id, { $set: req.body });
    console.log({ user });
    return res
      .status(200)
      .json({ success: true, messege: "Account updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server error" });
  }
};

const deleteUser = async (req, res) => {
  const Id = req.user;
  // if (req.user !== Id) {
  //   return res
  //     .status(400)
  //     .json({ success: false, messege: "You can only delete your account" });
  // }
  try {
    const user = await User.findByIdAndDelete(Id);
    console.log({ user });
    return res
      .status(200)
      .json({ success: true, messege: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Internal Server error" });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  sendRequest,
  requestAction,
  fetchRequests,
};
