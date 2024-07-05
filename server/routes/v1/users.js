const express = require('express')
const {
    createUser
} = require('../../controllers/userController')
const {
    hashPassword
} = require('../../middleware/auth')

const router = express.Router()

router.post('/users', hashPassword, createUser)

module.exports = router