import express from 'express'
import bodyParser from 'body-parser'
var router = express.Router()

router.use(express.static('public'))
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

import AirtableHandler from './airtable/handler'

var availableRoutes = [
    '/tagline',
    '/experiences'
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

router.get(availableRoutes[0], (req, res) => {
    AirtableHandler.getMiscellaneous()
    .then(data => res.send(data.find(piece => piece["Type"].toLowerCase() == "tagline")))
    .catch(e => internalServerError(res, e))
})

router.get(availableRoutes[1], (req, res) => {
    AirtableHandler.getExperiences()
    .then(data => res.send(data))
    .catch(e => internalServerError(res, e))
})

//nothing matched our api requests, return 404
router.get('*', (req, res) => { 
    return res.status(404).send({ error: 'Invalid API usage. Response not found.' }) 
})

module.exports = router