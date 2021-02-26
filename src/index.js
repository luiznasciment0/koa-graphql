const app = require('./app')
const initDB = require('./database')
const config = require('./config')

const initServer = async () => {
  await initDB()

  app.listen(config.PORT, () => {
    console.log(`server running on port ${config.PORT}`)
  })
}

initServer()
