const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  sendRequest,
  requestAction,
  fetchRequests,
} = require("../controllers/user.js");
const fetchUser = require("../middleware/fetchUser.js");

router
  .put("/:id", fetchUser, updateUser)
  .delete("/:id", fetchUser, deleteUser)
  .post("/sendrequests", fetchUser, sendRequest)
  .post("/requestaction", fetchUser, requestAction)
  .get("/fetchrequests", fetchUser, fetchRequests);

module.exports = router;
