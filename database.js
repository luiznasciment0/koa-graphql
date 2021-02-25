const mongoose = require('mongoose')
const uri = require('./dbconnection')

const initDB = () => {
  mongoose.connect(uri, { useNewUrlParser: true })

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected to database')
  });
}

module.exports = initDB
