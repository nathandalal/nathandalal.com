import express from 'express'
import http from 'http'
import config from './config'

const app = express()

import apiRoutes from './api/index'
app.use('/api', apiRoutes)

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('*', (req, res) => {
    res.render('pages/index', {
        
    })
})

const server = http.createServer(app)

server
    .listen(config.PORT)
    .on('listening', () => {
        console.log(`Server listening on http://localhost:${config.PORT}`)
    })
