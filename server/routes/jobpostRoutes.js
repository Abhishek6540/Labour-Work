const express = require('express');
const router = express.Router();
const { createJobPost, getJobPost, updateJobPost, deleteJobPost } = require('../controller/jobpostController');
const upload = require("../multer/ImgVideoUpload")


//Rotes
router.post("/", upload.fields([{ name: 'images', maxCount: 10 }, { name: 'videos', maxCount: 5 }]), createJobPost);
router.get("/:id", getJobPost)
router.put("/:id", updateJobPost)
router.delete("/:id",deleteJobPost)

module.exports = router