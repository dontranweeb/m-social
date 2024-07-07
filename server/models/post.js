const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    textContent: {
        type: String
    },
    imageUrl: {
        type: String
    },
    audioUrl: {
        type: String
    },
    videoUrl: {
        type: String
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Reply'
    }]
}, { timestamps: true })

module.exports = mongoose.model("Post", PostSchema)
