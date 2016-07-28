import { defaultConnection } from '../connection'
import mongoose, { Schema } from 'mongoose'

console.log(defaultConnection)

var BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        default: "Nathan Dalal"
    },
    postslug: {
        type: String,
        default: "This is an __empty__ post."
    },
    created: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        default: []
    }
})

module.exports = defaultConnection.model('BlogPost', BlogPostSchema)
