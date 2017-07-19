const Airtable = require('airtable')
const secrets = require('../../config').AIRTABLE
const base = new Airtable({ apiKey: secrets.API_KEY }).base(secrets.BASE);

module.exports.getExperiences = (baseView = "Full") => new Promise((resolve, reject) => {
	let experiences = []
	base('Experiences').select({
		view: baseView
	}).firstPage(function(err, records) {
    if (err) reject(err)
   	resolve(records.map(record => record.fields))
	})
})

module.exports.getMiscellaneous = () => new Promise((resolve, reject) => {
	base('Miscellaneous').select({
		view: 'Miscellaneous'
	}).firstPage(function(err, records) {
    if (err) reject(err)
   	resolve(records[0].fields)
	})
})