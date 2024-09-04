const Follow = require("../models/followModel");

exports.followUser = async (req, res) => {
    try {
        const { followerId, followingId } = req.body;
        if (followerId === followingId) {
            res.status(400).json({ success: false, message: "You cannot follow yourself" })
        }
        const newFollow = new Follow({ follower: followerId, following: followingId });
        await newFollow.save()
        res.status(201).json({ message: "Followed successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

exports.unfollowUser = async (req, res) => {
    try {
        const { followerId, followingId } = req.body;

        const follow = await Follow.findOneAndDelete({
            follower: followerId,
            following: followingId
        });
        console.log(follow, "follow")

        if (!follow) {
            res.status(404).json({ success: false, message: "User not found to unfollow" });
        }
        res.status(201).json(({ success: true, message: "Unfollowed successfully" }))
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

//jinhe maine follow kiya hua hai 
exports.getFollowers = async (req, res) => {
    try {
        const userId = req.params.id;
        const followers = await Follow.find({ following: userId }).populate("follower", ["name", "email", "image", "phone"]);
        res.status(201).json(followers);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

//jinhone mujhe follow kiya hua hai 
exports.getFollowing = async (req, res) => {
    try {
        const userId = req.params.id;
        const following = await Follow.find({ follower: userId }).populate("follower", ["name", "email", "image", "phone"]);
        res.status(201).json(following);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}