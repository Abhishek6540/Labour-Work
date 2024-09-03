const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
    videos: {
        type: [String],
    },
    author: {
        type: String,
        required: true,
    },
    tags: [String],
}, {
    timestamps: true  // This adds `createdAt` and `updatedAt` fields automatically
});

module.exports = mongoose.model("JobPost", jobPostSchema);
