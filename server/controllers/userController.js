const User = require('../models/user')
const bcrypt = require('bcrypt')
//const asyncHandler = require('express-async-handler')

const createUser = async (req, res, next) => {
    const {email, password, firstName, lastName} = req.body

    try {
        const user = await User.create({email, password, firstName, lastName})
        res.status(200).json(user)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

const authenticateUser = async(req, res, next) => {
    const {email, password} = req.body
    //console.log(email)
    try {
        const user = await User.findOne({email: email})
        
        if (!user) {
            return res.status(404).json({mssg: "User not found"})
        }
        const isMatch = bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({mssg: "Incorrect password"})
        }
        res.status(200).json(user)
        //res.redirect('/')
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    createUser,
    authenticateUser
}