import express from 'express'
import bodyParser from 'body-parser'
var router = express.Router()

router.use(express.static('public'))
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

import MongoHandler from './mongo/handler'

var availableRoutes = [
    '/blog-posts'
]

router.get('/', (req, res) => {
    res.render('pages/api-entry', {
        routes: availableRoutes
    })
})

const ErrorResponses = {
    internalServerError: (res, source) => res.status(500).send({ error: `Error retrieving data from ${source}.` }),
    badUserRequestError: (res, route, reason) => res.status(400).send({ error: `Invalid user request to ${route} API endpoint.`, reason: reason })
}

//api available request routes and responses
router.post(availableRoutes[0], (req, res) => {
    if (!(req.body) || Object.keys(req.body).length == 0) 
        return ErrorResponses.badUserRequestError(res, availableRoutes[0], "Empty POST request")
    MongoHandler.addPost(req.body)
    .then(blogPost => {
        res.send({
            published: true,
            title: blogPost.title,
            created: blogPost.created
        })
    })
    .catch(e => ErrorResponses.badUserRequestError(res, availableRoutes[0], e))
})

//nothing matched our api requests, return 404
router.get('*', (req, res) => { 
    return res.status(404).send({ error: 'Invalid API usage. Response not found.' }) 
})

module.exports = router