const {
    getUser,
    getUserUuid,
    searchUser,
    searchQuery
  } = require("../Controllers/user.controller");
const router = require('express').Router();


// user routes
router.get("/", getUser);
router.get("/search", searchUser);
router.get("/searchByParams", searchQuery);
router.get("/:uuid", getUserUuid);


module.exports = router;