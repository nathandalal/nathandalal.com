import express from 'express'
import http from 'http'

import apiRoutes from './api/index'

const app = express()
const port = 7777

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
    .listen(port)
    .on('listening', () => {
        console.log(`Server listening on http://localhost:${port}`)
    })
