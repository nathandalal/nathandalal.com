import mongoose from 'mongoose'
mongoose.promise = global.Promise //because mpromise is deprecated

import BlogPosts from './models/blog-post'

module.exports.addPost = (newBlogPost) => new Promise((resolve, reject) => {
    new BlogPosts(newBlogPost).save()
    .then(publishedBlogPost => resolve(publishedBlogPost))
    .catch(e => reject(e))
})