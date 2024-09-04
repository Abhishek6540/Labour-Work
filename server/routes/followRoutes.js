const express = require("express");
const { followUser, unfollowUser, getFollowers, getFollowing } = require("../controller/followController");
const router = express.Router();

router.post("/", followUser);
router.post("/unfollow", unfollowUser);
router.get('/followers/:id', getFollowers);
router.get('/following/:id', getFollowing);


module.exports = router;