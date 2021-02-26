const mongoose = require('mongoose')
const config = require('./config')

const initDB = () => {
  console.log("config.MONGO_URI ----------", config.MONGODB_URI)
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .on('open', () => resolve(mongoose.connections[0]))

    mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true
    })
  })
}

module.exports = initDB
