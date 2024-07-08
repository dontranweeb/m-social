const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    textContent: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Comment', CommentSchema)