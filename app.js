var express = require('express'),
    engines = require('consolidate'),
    app = express(),
    config = require('./config'),
    AirtableHandler = require('./server/airtable');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index');
})

app.get('/software', function (req, res) {
	res.render('software');
})

app.get('/old', function (req, res) {
	res.render('old')
	// Promise.all([
	// 	AirtableHandler.getExperiences("Education"),
	// 	AirtableHandler.getExperiences("Code"),
	// 	AirtableHandler.getExperiences("Fun"),
	// 	AirtableHandler.getMiscellaneous()
	// ])
	// .then(function (data) {
	// 	res.render('old', {
	// 		educitems: data[0],
	// 		codeitems: data[1],
	// 		funitems: data[2],
	// 		tagline: data[3][0]["Information"]
	// 	});
	// })
});

app.get('*', function(req, res) {
	res.redirect('/');
})

app.listen(config.PORT, function () {
	console.log('> nathandalal.com: app listening on port %s', config.PORT);
});