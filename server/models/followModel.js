const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: {
        type: String,
        ref: "User",
        required: true
    },
    following:{
        type: String,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Follow", followSchema);