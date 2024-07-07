const express = require('express')
const {
    createUser,
    authenticateUser
} = require('../../controllers/userController')
const {
    hashPassword
} = require('../../middleware/auth')

const router = express.Router()

router.post('/SignUp', hashPassword, createUser)
router.post('/Login', hashPassword, authenticateUser)

module.exports = router