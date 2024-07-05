const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const createUser = async (req, res, next) => {
    const {email, password, firstName, lastName} = req.body

    try {
        const user = await User.create({email, password, firstName, lastName})
        res.status(200).json(user)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    createUser
}