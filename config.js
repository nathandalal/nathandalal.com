if (process.env.NODE_ENV != 'production') require('dotenv').load()

module.exports = {
	APPNAME: process.env.APPNAME || 'App Template',
    PORT: process.env.PORT || 7777,
    HOST: process.env.HOST || 'localhost',
    DEVMODE: (process.env.NODE_ENV != 'production'),
    AIRTABLE: {
    	API_KEY: process.env.AIRTABLE_API_KEY,
    	BASE: process.env.AIRTABLE_BASE
    }
}