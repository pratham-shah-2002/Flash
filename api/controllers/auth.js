const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    let Exists = await User.findOne({ email: req.body.email });
    console.log("hello");
    if (Exists) {
      return res
        .status(400)
        .json({ success: false, messege: "User already exists" });
    }
    Exists = await User.findOne({ userName: req.body.userName });
    if (Exists) {
      return res
        .status(400)
        .json({ success: false, messege: "Username already taken" });
    }

    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(req.body.password, salt);
    const user = await new User({
      userName: req.body.userName,
      email: req.body.email,
      password: pass,
    });

    await user.save();

    const data = {
      user: {
        user: user._id,
      },
    };
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.status(200).json({ success: true, "auth-token": token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ success: false, messege: "User not found" });
  }
  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    return res
      .status(400)
      .json({ success: false, messege: "Please enter correct credentials" });
  }
  const data = {
    user: {
      user: user._id,
    },
  };
  const token = jwt.sign(data, process.env.JWT_SECRET);
  res.status(200).json({ success: true, "auth-token": token });
};

module.exports = {
  login,
  signup,
};
