'use strict';

var Airtable = require('airtable'),
    config = require('../config');
var base = new Airtable({ apiKey: config.AIRTABLE.API_KEY }).base(config.AIRTABLE.BASE);

module.exports.getMiscellaneous = function () {
	return new Promise(function (resolve, reject) {
		base('Miscellaneous').select({
			view: "Miscellaneous"
		}).firstPage(function (error, records) {
			if (error || (records == null)) reject(error);
			resolve(records.map(function (record) {
				return record._rawJson.fields;
			}));
		});
	});
};

module.exports.getExperiences = function () {
	var baseView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Full";
	return new Promise(function (resolve, reject) {
		var experiences = [];
		base('Experiences').select({
			view: baseView
		}).eachPage(function page(records, fetchNextPage) {
			experiences = experiences.concat(records);
			fetchNextPage();
		}, function done(error) {
			if (error || experiences.length == 0) reject(error);
			resolve(experiences.map(function (record) {
				return record._rawJson.fields;
			}));
		});
	});
};