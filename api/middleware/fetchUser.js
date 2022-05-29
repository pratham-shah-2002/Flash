const jwt = require("jsonwebtoken");
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(400).json({ success: false, messege: "Token not found" });
  }
  const data = jwt.verify(token, process.env.JWT_SECRET);
  req.user = data.user.user;
  next();
};

module.exports = fetchUser;
