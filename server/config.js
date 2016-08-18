if (process.env.NODE_ENV != 'production') require('dotenv').load()

module.exports = {
    PORT: process.env.PORT || 7777,
    DEVMODE: (process.env.NODE_ENV != 'production'),
    MONGO: {
        URL: process.env.MONGODB_URI || "mongodb://localhost/nathandalal-com-dev"
    }
}