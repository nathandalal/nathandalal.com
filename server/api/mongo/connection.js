import mongoose from 'mongoose'
mongoose.promise = global.Promise //because mpromise is deprecated

import config from '../../config'

var connectionObj = null

function initDb(defaultConnectionUrl) {
    if(connectionObj) return connectionObj
    var defaultConn = mongoose.createConnection(defaultConnectionUrl)

    process.on('SIGINT', () => {
        defaultConn.close(() => {
            console.log('Mongoose default connection disconnected through app termination')
            process.exit(0)
        })
    })
    return (connectionObj = {defaultConnection:defaultConn})
}

module.exports = initDb(config.MONGO.URL)
