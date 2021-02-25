const mongoose = require('mongoose')

const initDB = () => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected to database')
  });
}

module.exports = initDB
