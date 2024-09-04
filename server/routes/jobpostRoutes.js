const express = require('express');
const router = express.Router();
const { createJobPost, getJobPost, updateJobPost, deleteJobPost, getAllJobPosts } = require('../controller/jobpostController');
const upload = require("../middleware/uploadMiddleware")


//Rotes
router.post("/", upload.fields([{ name: 'images', maxCount: 10 }, { name: 'videos', maxCount: 5 }]), createJobPost);
router.get("/:user_id", getAllJobPosts);
router.get("/:id", getJobPost);
router.put("/:id", updateJobPost);
router.delete("/:id",deleteJobPost);

module.exports = router