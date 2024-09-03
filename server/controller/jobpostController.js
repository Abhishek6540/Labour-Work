const jobPostSchema = require('../models/jobPostModel');

exports.createJobPost = async(req, res)=>{
    try {
        console.log(req.files, "***************"); 

    const images = (req.files && req.files['images']) ? req.files['images'].map(file => file.path) : [];
    const videos = (req.files && req.files['videos']) ? req.files['videos'].map(file => file.path) : [];

        const jobPost = new jobPostSchema({
            ...req.body,
            images,
            videos
        });
        console.log(jobPost,"***************")
        await jobPost.save();

        res.status(201).json({ success: true, message: 'Job Post Created Successfully', jobPost });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
exports.getJobPost = async (req, res) => {
    try {
        const jobPost = await jobPostSchema.findById(req.params.id);
        if (!jobPost) {
            return res.status(404).json({ success: false, message: 'Job Post not found' });
        }
        res.status(200).json({ success: true, jobPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
exports.updateJobPost = async(req, res)=>{
    try {
        const images = (req.files && req.files['images']) ? req.files['images'].map(file => file.path) : [];
        const videos = (req.files && req.files['videos']) ? req.files['videos'].map(file => file.path) : [];
        
        const updatedJobPost = await jobPostSchema.findByIdAndUpdate(req.params.id, {
            ...req.body,
            images,
            videos
        }, { new: true }); // { new: true } returns the updated document

        if (!updatedJobPost) {
            return res.status(404).json({ success: false, message: 'Job Post not found' });
        }

        res.status(200).json({ success: true, message: 'Job Post updated successfully', updatedJobPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
exports.deleteJobPost = async(req,res)=>{
    try {
        const jobPost = await jobPostSchema.findByIdAndDelete(req.params.id);
        if (!jobPost) {
            return res.status(404).json({ success: false, message: 'Job Post not found' });
        }
        res.status(200).json({ success: true, message: 'Job Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}