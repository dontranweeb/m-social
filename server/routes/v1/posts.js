const express = require('express')
const {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
} = require('../../controllers/postController')

const router = express.Router()

router.get("/posts", getAllPosts)
router.get("/posts/:id", getPostById)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.patch('/posts/:id', updatePost)

module.exports = router