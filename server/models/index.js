const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/lastfmdash')

module.exports.User = require('./user')