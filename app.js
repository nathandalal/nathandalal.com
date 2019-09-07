const express = require('express')
const engines = require('consolidate')
const serverless = require('serverless-http')

const config = require('./config')
const apiRoutes = require('./api/index')

const app = express()
app.engine('njk', engines.nunjucks)
app.set('view engine', 'njk')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

const mainRoutes = express.Router();
mainRoutes.get('*', (req, res) => {
  res.render('pages/index', {
	appname: config.APPNAME
  })
})

if (config.DEVMODE) {
	app.use('/api', apiRoutes)
	app.use('/', mainRoutes)
	app.listen(config.PORT, config.HOST, () => {
	  console.log(`App currently running; navigate to ${config.HOST}:${config.PORT} in a web browser.`)
	})
} else {
	app.use('/.netlify/functions/server/api', apiRoutes)
	app.use('/.netlify/functions/server', mainRoutes)  // path must route to lambda
	module.exports = app
	module.exports.handler = serverless(app)
}