const Post = require('../models/post')

const createPost = async (req, res, next) => {
    const {userId, textContent, image, video, audio} = req.body
    try {
        if (!userId) {
            return res.status(404).json({"Error": "Invalid UserID"})
        }
        if (!textContent && !image && !video && !audio) {
            return res.status(400).json({"Error": "No content exists"})
        }
        const post = await Post.create({userId, textContent, audio, image, video})
        res.status(200).json(post)
    } catch(err) {
        res.status(400).json(err)
    }
}

module.exports = {
    createPost
}