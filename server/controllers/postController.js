const Post = require('../models/post')

const createPost = async (req, res, next) => {
    const { authorId, textContent, imageUrl, videoUrl, audioUrl } = req.body
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

const deletePost = async (req, res, next) => {
    const { id } = req.params
    try {
        const result = await Post.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({"Error": "Post not found"})
        }
        res.status(200).json({"msg": "Post deleted"})
    } catch (err) {
        res.status(500).json(err)
    }
}

const updatePost = async (req, res, next) => {
    const { id } = req.params
    const updatedData = req.body
    try {
        const result = await Post.findByIdAndUpdate(id, updatedData, { new: true })
        if (!result) {
            return res.status(404).json({"Error": "Post not found"})
        }
        res.status(200).json({"msg": "Post updated"})
    } catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createPost,
    deletePost,
    updatePost
}