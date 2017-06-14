import Airtable from 'airtable'
import { AIRTABLE } from '../../config'
let base = new Airtable({ apiKey: AIRTABLE.API_KEY }).base(AIRTABLE.BASE)

module.exports.getMiscellaneous = () => new Promise((resolve, reject) => {
	base('Miscellaneous').select({
    	view: "Miscellaneous"
	}).firstPage((error, records) => {
		if(error) reject(error)
	    resolve(records.map(record => record._rawJson.fields))
	})
})

module.exports.getExperiences = () => new Promise((resolve, reject) => {
	var experiences = []
	base('Experiences').select({
    	view: "Full"
	}).eachPage(function page(records, fetchNextPage) {
	    experiences = experiences.concat(records)
	    fetchNextPage()
	}, function done(error) {
	    if (error) reject(error)
	    resolve(experiences.map(record => record._rawJson.fields))
	})
})
