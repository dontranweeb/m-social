const express = require('express')
const {
    createPost,
    deletePost,
    updatePost
} = require('../../controllers/postController')

const router = express.Router()

router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.patch('/posts/:id', updatePost)

module.exports = router