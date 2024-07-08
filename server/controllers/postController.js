const Post = require('../models/post')

const createPost = async (req, res, next) => {
    const {authorId, textContent, imageUrl, videoUrl, audioUrl} = req.body
    try {
        if (!authorId) {
            return res.status(404).json({"Error": "Invalid UserID"})
        }
        if (!textContent && !imageUrl && !videoUrl && !audioUrl) {
            return res.status(400).json({"Error": "No content exists"})
        }
        const post = await Post.create({authorId, textContent, audioUrl, imageUrl, videoUrl})
        res.status(200).json(post)
    } catch(err) {
        res.status(400).json(err)
    }
}

module.exports = {
    createPost
}