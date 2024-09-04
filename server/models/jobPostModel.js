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
    user_id:{
        type: "String",
        ref: 'User'
    },
    tags: [String],
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("JobPost", jobPostSchema);
