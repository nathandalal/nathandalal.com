import monggose from 'mongoose'
mongoose.promise = Global.Promise //because mpromise is deprecated

import Config from '/server/config.js'
console.log(Config)
