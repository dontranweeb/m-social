const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    userID: {
        type: ObjectId,
        required: true
    },
    textContent: {
        type: String
    },
    image: {
        type: String
    },
    audio: {
        type: String
    },
    video: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.Model("Post", PostSchema)
